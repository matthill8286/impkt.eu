import { Link } from 'react-router-dom';
import { BreadcrumbsProps } from '@/components/breadcrumbs/breadcrumbs.interface';

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
