import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";

const outputDirectory = path.resolve("dist");
const template = await readFile(path.join(outputDirectory, "index.html"), "utf8");
const vite = await createServer({
  configFile: path.resolve("vite.config.ts"),
  mode: "production",
  appType: "custom",
  server: { middlewareMode: true },
});

try {
  const [{ default: ServerApp }, { sitePages }, { projects }, { getMetadata, getStructuredData, siteOrigin }] =
    await Promise.all([
      vite.ssrLoadModule("/src/ServerApp.tsx"),
      vite.ssrLoadModule("/src/data/sitePages.ts"),
      vite.ssrLoadModule("/src/data/projects.ts"),
      vite.ssrLoadModule("/src/lib/seo.ts"),
    ]);

  const routes = [
    ...sitePages.map((page) => page.path),
    ...projects.map((project) => `/projects/${project.slug}`),
  ];

  const escapeAttribute = (value) =>
    value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");

  const replaceRequiredTag = (html, pattern, replacement, description) => {
    if (!pattern.test(html)) {
      throw new Error(`Could not find ${description} in the HTML template`);
    }
    return html.replace(pattern, replacement);
  };

  const renderPage = async (pathname) => {
    const metadata = getMetadata(pathname);
    const markup = renderToString(createElement(ServerApp, { location: pathname }));
    const rootPattern = /<div id="root">[\s\S]*?<\/div>(\s*<\/body>)/;
    if (!rootPattern.test(template)) {
      throw new Error("Could not find the application root in the HTML template");
    }
    let html = template.replace(
      rootPattern,
      (_match, bodyClosing) => `<div id="root">${markup}</div>${bodyClosing}`,
    );

    html = replaceRequiredTag(
      html,
      /<title>[\s\S]*?<\/title>/,
      `<title>${escapeAttribute(metadata.title)}</title>`,
      "document title",
    );
    html = replaceRequiredTag(
      html,
      /<meta name="description"[^>]*>/,
      `<meta name="description" content="${escapeAttribute(metadata.description)}" />`,
      "description metadata",
    );
    html = replaceRequiredTag(
      html,
      /<meta name="robots"[^>]*>/,
      `<meta name="robots" content="${metadata.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"}" />`,
      "robots metadata",
    );

    for (const [property, value] of [
      ["og:title", metadata.title],
      ["og:description", metadata.description],
      ["og:type", metadata.project ? "article" : "website"],
      ["og:url", metadata.canonical ?? `${siteOrigin}${metadata.path}`],
      ["twitter:title", metadata.title],
      ["twitter:description", metadata.description],
    ]) {
      const attribute = property.startsWith("og:") ? "property" : "name";
      const pattern = new RegExp(`<meta ${attribute}="${property}"[^>]*>`);
      html = replaceRequiredTag(
        html,
        pattern,
        `<meta ${attribute}="${property}" content="${escapeAttribute(value)}" />`,
        `${property} metadata`,
      );
    }

    if (metadata.canonical) {
      html = replaceRequiredTag(
        html,
        /<link rel="canonical"[^>]*>/,
        `<link rel="canonical" href="${escapeAttribute(metadata.canonical)}" />`,
        "canonical link",
      );
    } else {
      html = html.replace(/<link rel="canonical"[^>]*>\s*/, "");
    }

    html = replaceRequiredTag(
      html,
      /<script id="structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script id="structured-data" type="application/ld+json">${JSON.stringify(getStructuredData(pathname)).replaceAll("<", "\\u003c")}</script>`,
      "structured data placeholder",
    );

    return html;
  };

  for (const route of routes) {
    const html = await renderPage(route);
    const destination =
      route === "/"
        ? path.join(outputDirectory, "index.html")
        : path.join(outputDirectory, route.slice(1), "index.html");
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, html);
  }

  const notFound = await renderPage("/__not-found");
  await writeFile(path.join(outputDirectory, "404.html"), notFound);

  const sitemapEntries = routes
    .map(
      (route) =>
        `  <url>\n    <loc>${siteOrigin}${route}</loc>\n    <changefreq>monthly</changefreq>\n  </url>`,
    )
    .join("\n");
  await writeFile(
    path.join(outputDirectory, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`,
  );
  console.log(`Prerendered ${routes.length} routes and a 404 page.`);
} finally {
  await vite.close();
}
