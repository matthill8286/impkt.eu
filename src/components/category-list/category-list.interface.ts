export interface CategoryListProps {
  categories: LinkWithSlug[];
}

export type LinkWithSlug = {
  slug: string;
  name: string;
};

export interface CategoryItemProps {
  category: LinkWithSlug;
}
