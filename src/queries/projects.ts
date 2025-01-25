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
      content {
        json
      }
      coverImage {
        url
        altText
      }
      images {
        url
        altText
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
      content {
        json
      }
      coverImage {
        url
        altText
      }
      images {
        url
        altText
      }
    }
  }
`);
