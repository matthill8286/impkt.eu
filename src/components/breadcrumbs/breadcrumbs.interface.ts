export type Crumb = {
  to: string;
  label: string;
};

export interface BreadcrumbsProps {
  crumbs: Crumb[];
}
