import { Link } from "react-router-dom";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

const Breadcrumbs = ({ items }: { items: BreadcrumbItem[] }) => (
  <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
    <ol className="flex flex-wrap items-center gap-2">
      {items.map((item, index) => (
        <li key={`${item.label}-${index}`} className="flex items-center gap-2">
          {index > 0 && <span aria-hidden="true">/</span>}
          {item.href ? (
            <Link className="transition-colors hover:text-primary" to={item.href}>
              {item.label}
            </Link>
          ) : (
            <span aria-current="page" className="text-foreground">
              {item.label}
            </span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
