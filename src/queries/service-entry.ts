import { gql } from '@apollo/client';

export const serviceEntriesQuery = gql`
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
`;

export const serviceEntryQuery = gql`
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
`;
