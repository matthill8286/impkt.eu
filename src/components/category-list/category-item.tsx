import { Link } from 'react-router-dom';
import { CategoryItemProps } from '@/components/category-list/category-list.interface';

export default function CategoryItem({ category }: CategoryItemProps) {
  return (
    <li>
      <Link to={category.slug}>{category.name}</Link>
    </li>
  );
}
