// Note: This file contains all the queries related to the post.
// @ts-nocheck
import { gql } from '@/__generated__';

export const postByIdQuery = gql(/* GraphQL */ `
  query PostById($id: ID!) {
    post(where: { id: $id }) {
      content {
        json
      }
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
      id
      title
      slug
      date
      publishedBy {
        name
        picture
        isActive
      }
      coverImage {
        url
        altText
        height
        width
      }
    }
  }
`);

export const postsQuery = gql(/* GraphQL */ `
  query Posts {
    posts {
      content {
        json
      }
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
      id
      title
      slug
      date
      publishedBy {
        name
        picture
        isActive
      }
      coverImage {
        url
        altText
        height
        width
      }
    }
  }
`);
