import CategoryItem from '@/components/category-list/category-item';

export default function CategoryList({
  categories = [],
}: {
  categories?: {
    slug: string;
    name: string;
  }[];
}) {
  return (
    <ul className="impkt-category-list">
      {categories.map((category) => (
        <CategoryItem category={category} />
      ))}
    </ul>
  );
}
