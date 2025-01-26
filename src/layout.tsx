import AppLayout from '@/components/layout';
import { useCallback } from 'react';

export function Layout() {
  const cacheLayout = useCallback(() => {
    return <AppLayout />;
  }, []);

  return cacheLayout();
}
