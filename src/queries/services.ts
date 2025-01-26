// @ts-nocheck
// eslint-disable
import { gql } from '@apollo/client';

export const servicesQuery = gql(/* GraphQL */ `
  query services {
    services {
      id
      title
      description {
        text
        __typename
      }
    }
  }
`);

export const serviceQuery = gql(/* GraphQL */ `
  query service($id: ID!) {
    service(where: { id: $id }) {
      description {
        text
      }
      title
      __typename
    }
  }
`);
