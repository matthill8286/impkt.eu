// @ts-nocheck
// eslint-disable
import { type Post } from '@/components/Post';
import { gql } from '@apollo/client';

export type ServicesResponse = {
  serviceEntry: Post[];
};

export const servicesQuery = gql(/* GraphQL */ `
  query services {
    services {
      id
      title
      description {
        text
      }
    }
  }
`);

export const serviceQuery = gql(/* GraphQL */ `
  query service($id: ID!) {
    service(where: { id: $id }) {
      description {
        raw
        text
      }
      title
    }
  }
`);
