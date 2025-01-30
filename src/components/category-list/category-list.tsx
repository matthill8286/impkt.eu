import CategoryItem from '@/components/category-list/category-item';
import { CategoryListProps } from '@/components/category-list/category-list.interface';

export default function CategoryList({ categories = [] }: CategoryListProps) {
  return (
    <ul className="impkt-category-list">
      {categories.map((category) => (
        <CategoryItem category={category} />
      ))}
    </ul>
  );
}
