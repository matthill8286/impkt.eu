// @ts-nocheck
// eslint-disable
import { gql } from '@apollo/client';

export const servicesQuery = gql(/* GraphQL */ `
  query serviceItems {
    serviceItems {
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
  query serviceItem($id: ID!) {
    serviceItem(where: { id: $id }) {
      description {
        text
      }
      title
      __typename
    }
  }
`);
