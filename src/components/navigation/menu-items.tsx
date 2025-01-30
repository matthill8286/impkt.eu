import { Link } from 'react-router-dom';
import { Maybe, Navigation } from '@/__generated__/graphql';

interface MenuItemsProps {
  items: Navigation[];
  onMenuClick?: () => void;
}

export default function MenuItems({ items, onMenuClick }: MenuItemsProps) {
  const capitalize = (s: Maybe<string> | undefined) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Link onClick={onMenuClick} to={`/${item.navId}`}>
            {capitalize(item.navId)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
