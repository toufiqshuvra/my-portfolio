import { useEffect } from "react";
import { getMetadata, getStructuredData } from "@/lib/seo";

type SeoProps = {
  pathname: string;
};

const setMeta = (attribute: "name" | "property", key: string, value: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.append(element);
  }
  element.content = value;
};

const Seo = ({ pathname }: SeoProps) => {
  useEffect(() => {
    const metadata = getMetadata(pathname);
    document.title = metadata.title;
    setMeta("name", "description", metadata.description);
    setMeta("name", "robots", metadata.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large");
    setMeta("property", "og:title", metadata.title);
    setMeta("property", "og:description", metadata.description);
    setMeta("property", "og:url", metadata.canonical ?? `${window.location.origin}${metadata.path}`);
    setMeta("property", "og:type", metadata.project ? "article" : "website");
    setMeta("name", "twitter:title", metadata.title);
    setMeta("name", "twitter:description", metadata.description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (metadata.canonical) {
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.append(canonical);
      }
      canonical.href = metadata.canonical;
    } else {
      canonical?.remove();
    }

    const structuredData = document.getElementById("structured-data");
    structuredData?.replaceChildren(JSON.stringify(getStructuredData(pathname)));
  }, [pathname]);

  return null;
};

export default Seo;
