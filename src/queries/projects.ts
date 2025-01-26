// Type: GraphQL Query
// Description: This query fetches all the projects from the Strapi API.
// @ts-nocheck
import { gql } from '@apollo/client';

export const projectsQuery = gql(/* GraphQL */ `
  query Projects {
    projects {
      createdAt
      title
      id
      slug
      date
      author {
        ... on Author {
          remoteTypeName: __typename
          remoteId: id
          name
          title
          picture {
            url
            width
            height
          }
        }
      }
      content {
        json
      }
      coverImage {
        url
        altText
        mimeType
      }
      images {
        url
        altText
        mimeType
        handle
        width
        height
      }
      videos {
        url
        altText
        handle
        mimeType
        width
        height
      }
    }
  }
`);

export const projectQuery = gql(/* GraphQL */ `
  query Project($id: ID!) {
    project(where: { id: $id }) {
      createdAt
      title
      id
      slug
      date
      category
      author {
        ... on Author {
          remoteTypeName: __typename
          remoteId: id
          name
          title
          picture {
            url
            width
            height
          }
        }
      }
      content {
        json
      }
      coverImage {
        url
        altText
        mimeType
      }
      images {
        url
        altText
        mimeType
        width
        height
        handle
      }
      videos {
        url
        altText
        mimeType
        handle
        width
        height
      }
    }
  }
`);
