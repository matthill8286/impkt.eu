import { ApolloProvider } from '@apollo/client';
import Router from '@/routes';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from '@/hooks/useScroll';
import client from '@/client';

export function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <ScrollToTop>
          <Router />
        </ScrollToTop>
      </BrowserRouter>
    </ApolloProvider>
  );
}
