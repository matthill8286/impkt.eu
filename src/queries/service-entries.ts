import { gql } from '@apollo/client';

export const serviceEntriesQuery = gql(/* GraphQL */ `
  query ServiceEntries {
    serviceEntries {
      id
      title
      richTextTitle {
        raw
      }
      description {
        raw
      }
      service {
        title
        description {
          raw
        }
      }
    }
  }
`);

export const serviceEntryQuery = gql(/* GraphQL */ `
  query ServiceEntry($id: ID!) {
    serviceEntry(where: { id: $id }) {
      id
      title
      richTextTitle {
        raw
      }
      description {
        raw
      }
      service {
        title
        description {
          raw
        }
      }
    }
  }
`);
