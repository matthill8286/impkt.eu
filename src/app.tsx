import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import Router from '@/routes';
import { BrowserRouter } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import ScrollToTop from '@/hooks/useScroll';

const httpLink = createHttpLink({
  uri: 'https://eu-west-2.cdn.hygraph.com/content/cm4mk3bcw01ci07ut9r50261m/master',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MzQwODI4NTEsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY200bWszYmN3MDFjaTA3dXQ5cjUwMjYxbS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiNzBmOWI4ODItMzUzYS00YjllLWE5ZGUtYmVlYTA3OTQ2OTQ0IiwianRpIjoiY2thNWoyZW9iMDN0YzAxd2gwZGZkNjdyeSJ9.YlU6g7Y8u_wNvRMG2Bni36Npzm_SESyqiDH1OyyPUCVxjWc_FqpwZDpTelWdbmfh5oCWmaVx8lco466QZgJFuBNqRh7RIveefHSvGiqr2MbKDiDi5PZyGNDTFx-s-cVDBp6V7PBtohPe-OxYrdZnhBz7vTkwwoOX_iAwSlr3ML6A-2jTQKLYzRU8vX2JwEPciFiP57k5AO2HftdXijZ_qpGbXf0BDLfq_a065yPkJ9IwnrQ5jTIZnv5xxDyevugYPm-5xalMxzcGNGHhOQJI3LYkaf7YDXitRHD94YjaWREvvEPIj6qeR7chCE3ofTDSeFpv2khUHAMuqS9gZVyfRdS6Gei39MAh0ml4lq_lsSSU0Ob--afTmU7kQSRQFFZsHDe0Lfga1eRKsSHqWkcQzTAbooGFz_ryXoo0Cvd7-R1A5zt_a2M1a-uF0peZa4XZL6-ZKWOUH0pgxpLN5gqHMbMoEmAgmSpNhqbkiSShnv3x2TM9ihtrVlbbBkxYAS7BNMddiLfuBEU4_mWJdYdegkul--k87Qnt3K146PmYSgvGvLOQr9VQW5vdOHYKDnDbx_6GzhQjaZn0TL2V2wyf73biyerpYOM8fAAnGyh80uNJsV-1bjB4LUg1ppGQk32bz4UcWPZLREZvpKEf8OdOW75gCwujlduO3f9xDyuKJbY`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export function App() {
  return (
    <ApolloProvider client={client}>
      <div className="impkt-wrapper" id="top">
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
      </div>
    </ApolloProvider>
  );
}
