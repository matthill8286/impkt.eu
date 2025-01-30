import AppLayout from '@/components/layout/layout';
import { useMemo } from 'react';

export function Layout() {
  return useMemo(() => {
    return <AppLayout />;
  }, []);
}
