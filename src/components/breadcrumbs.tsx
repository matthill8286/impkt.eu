import { Link } from 'react-router-dom';

type Crumb = {
  to: string;
  label: string;
};

interface BreadcrumbsProps {
  crumbs: Crumb[];
}

export default function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  return (
    <ul className="impkt-breadcrumbs impkt-mb-60">
      {crumbs?.map((crumb) => (
        <li key={crumb.to}>
          <Link to={crumb.to}>{crumb.label}</Link>
        </li>
      ))}
    </ul>
  );
}
