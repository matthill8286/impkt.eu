import { gql } from '@/__generated__';

const navigations = gql(/* GraphQL */ `
  query navigationFirst($componentFirst: Int) {
    navigations {
      id
      __typename
      createdAt
      updatedAt
      createdBy {
        id
        picture
        name
        kind
        isActive
      }
      updatedBy {
        id
        picture
        name
        kind
        isActive
      }
      navId
      link(first: $componentFirst) {
        __typename
        stage
        id
        displayText
        page {
          ... on ServiceItem {
            id
            ServiceItem_title: title
            __typename
          }
          ... on Page {
            id
            Page_title: title
            __typename
          }
          ... on Author {
            id
            Author_name: name
            __typename
          }
          ... on Post {
            id
            Post_title: title
            __typename
          }
          ... on Project {
            id
            Project_title: title
            __typename
          }
        }
        externalUrl
      }
    }
  }
`);

const navIdOnly = gql(/* GraphQL */ `
  {
    navId: navigations {
      id
      __typename
      navId
    }
  }
`);

export { navigations, navIdOnly };
