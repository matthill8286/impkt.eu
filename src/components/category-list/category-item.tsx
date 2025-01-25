import { Link } from 'react-router-dom';

export default function CategoryItem({
  category,
}: {
  category: {
    slug: string;
    name: string;
  };
}) {
  return (
    <li>
      <Link to={category.slug}>{category.name}</Link>
    </li>
  );
}
