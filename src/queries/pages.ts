// Type: GraphQL Query
// Description: This query fetches all the pages from the Strapi API.
// @ts-nocheck
/* eslint-disable */
import { gql } from '@/__generated__';

const AllPages = gql(/* GraphQL */ `
  query AllPages {
    pages {
      id
      slug
      title
      __typename
    }
  }
`);

const SinglePage = gql(/* GraphQL */ `
  query SinglePage($slug: String!) {
    page(where: { slug: $slug }) {
      title
      seoOverride {
        __typename
        stage
        id
        title
        description
        image {
          id
          fileName
          size
          mimeType
          url
          width
          height
          handle
          __typename
        }
      }
      content {
        html
        raw
      }
      serviceItems {
        ... on Service {
          __typename
          stage
          id
          service {
            id
            title
            __typename
          }
        }
      }
      banner {
        ... on BannerComponent {
          id
          __typename
          buttonLabel
          buttonLink
          title {
            raw
          }
          description {
            raw
          }
        }
      }
      accordion {
        ... on AccordionComponent {
          __typename
          stage
          id
          heading
          description {
            raw
          }
        }
      }
    }
  }
`);

export { AllPages, SinglePage };
