import { Link } from 'react-router-dom';

interface BreadcrumbsProps {
  crumbs?: [{ to: string; label: string }, { to: string; label: string }];
}

export default function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  return (
    <ul className="impkt-breadcrumbs impkt-mb-60">
      {crumbs?.map((crumb) => (
        <li>
          <Link to={crumb.to}>{crumb.label}</Link>
        </li>
      ))}
    </ul>
  );
}
