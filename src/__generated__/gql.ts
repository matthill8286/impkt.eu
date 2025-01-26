/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  query PostById($id: ID!) {\n    post(where: { id: $id }) {\n      content {\n        json\n      }\n      author {\n        ... on Author {\n          remoteTypeName: __typename\n          remoteId: id\n          name\n          title\n          picture {\n            url\n            width\n            height\n          }\n        }\n      }\n      id\n      title\n      slug\n      date\n      publishedBy {\n        name\n        picture\n        isActive\n      }\n      coverImage {\n        url\n        altText\n        height\n        width\n      }\n    }\n  }\n": types.PostByIdDocument,
    "\n  query Posts {\n    posts {\n      content {\n        json\n      }\n      author {\n        ... on Author {\n          remoteTypeName: __typename\n          remoteId: id\n          name\n          title\n          picture {\n            url\n            width\n            height\n          }\n        }\n      }\n      id\n      title\n      slug\n      date\n      publishedBy {\n        name\n        picture\n        isActive\n      }\n      coverImage {\n        url\n        altText\n        height\n        width\n      }\n    }\n  }\n": types.PostsDocument,
    "\n  query Projects {\n    projects {\n      createdAt\n      title\n      id\n      slug\n      date\n      author {\n        ... on Author {\n          remoteTypeName: __typename\n          remoteId: id\n          name\n          title\n          picture {\n            url\n            width\n            height\n          }\n        }\n      }\n      content {\n        json\n      }\n      coverImage {\n        url\n        altText\n        mimeType\n      }\n      images {\n        url\n        altText\n        mimeType\n        handle\n        width\n        height\n      }\n      videos {\n        url\n        altText\n        handle\n        mimeType\n        width\n        height\n      }\n    }\n  }\n": types.ProjectsDocument,
    "\n  query Project($id: ID!) {\n    project(where: { id: $id }) {\n      createdAt\n      title\n      id\n      slug\n      date\n      category\n      author {\n        ... on Author {\n          remoteTypeName: __typename\n          remoteId: id\n          name\n          title\n          picture {\n            url\n            width\n            height\n          }\n        }\n      }\n      content {\n        json\n      }\n      coverImage {\n        url\n        altText\n        mimeType\n      }\n      images {\n        url\n        altText\n        mimeType\n        width\n        height\n        handle\n      }\n      videos {\n        url\n        altText\n        mimeType\n        handle\n        width\n        height\n      }\n    }\n  }\n": types.ProjectDocument,
    "\n  query ServiceEntries {\n    serviceEntries {\n      id\n      title\n      richTextTitle {\n        raw\n      }\n      description {\n        raw\n      }\n      service {\n        title\n        description {\n          raw\n        }\n      }\n    }\n  }\n": types.ServiceEntriesDocument,
    "\n  query ServiceEntry($id: ID!) {\n    serviceEntry(where: { id: $id }) {\n      id\n      title\n      richTextTitle {\n        raw\n      }\n      description {\n        raw\n      }\n      service {\n        title\n        description {\n          raw\n        }\n      }\n    }\n  }\n": types.ServiceEntryDocument,
    "\n  query services {\n    services {\n      id\n      title\n      description {\n        text\n        __typename\n      }\n    }\n  }\n": types.ServicesDocument,
    "\n  query service($id: ID!) {\n    service(where: { id: $id }) {\n      description {\n        text\n      }\n      title\n      __typename\n    }\n  }\n": types.ServiceDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query PostById($id: ID!) {\n    post(where: { id: $id }) {\n      content {\n        json\n      }\n      author {\n        ... on Author {\n          remoteTypeName: __typename\n          remoteId: id\n          name\n          title\n          picture {\n            url\n            width\n            height\n          }\n        }\n      }\n      id\n      title\n      slug\n      date\n      publishedBy {\n        name\n        picture\n        isActive\n      }\n      coverImage {\n        url\n        altText\n        height\n        width\n      }\n    }\n  }\n"): (typeof documents)["\n  query PostById($id: ID!) {\n    post(where: { id: $id }) {\n      content {\n        json\n      }\n      author {\n        ... on Author {\n          remoteTypeName: __typename\n          remoteId: id\n          name\n          title\n          picture {\n            url\n            width\n            height\n          }\n        }\n      }\n      id\n      title\n      slug\n      date\n      publishedBy {\n        name\n        picture\n        isActive\n      }\n      coverImage {\n        url\n        altText\n        height\n        width\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Posts {\n    posts {\n      content {\n        json\n      }\n      author {\n        ... on Author {\n          remoteTypeName: __typename\n          remoteId: id\n          name\n          title\n          picture {\n            url\n            width\n            height\n          }\n        }\n      }\n      id\n      title\n      slug\n      date\n      publishedBy {\n        name\n        picture\n        isActive\n      }\n      coverImage {\n        url\n        altText\n        height\n        width\n      }\n    }\n  }\n"): (typeof documents)["\n  query Posts {\n    posts {\n      content {\n        json\n      }\n      author {\n        ... on Author {\n          remoteTypeName: __typename\n          remoteId: id\n          name\n          title\n          picture {\n            url\n            width\n            height\n          }\n        }\n      }\n      id\n      title\n      slug\n      date\n      publishedBy {\n        name\n        picture\n        isActive\n      }\n      coverImage {\n        url\n        altText\n        height\n        width\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Projects {\n    projects {\n      createdAt\n      title\n      id\n      slug\n      date\n      author {\n        ... on Author {\n          remoteTypeName: __typename\n          remoteId: id\n          name\n          title\n          picture {\n            url\n            width\n            height\n          }\n        }\n      }\n      content {\n        json\n      }\n      coverImage {\n        url\n        altText\n        mimeType\n      }\n      images {\n        url\n        altText\n        mimeType\n        handle\n        width\n        height\n      }\n      videos {\n        url\n        altText\n        handle\n        mimeType\n        width\n        height\n      }\n    }\n  }\n"): (typeof documents)["\n  query Projects {\n    projects {\n      createdAt\n      title\n      id\n      slug\n      date\n      author {\n        ... on Author {\n          remoteTypeName: __typename\n          remoteId: id\n          name\n          title\n          picture {\n            url\n            width\n            height\n          }\n        }\n      }\n      content {\n        json\n      }\n      coverImage {\n        url\n        altText\n        mimeType\n      }\n      images {\n        url\n        altText\n        mimeType\n        handle\n        width\n        height\n      }\n      videos {\n        url\n        altText\n        handle\n        mimeType\n        width\n        height\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Project($id: ID!) {\n    project(where: { id: $id }) {\n      createdAt\n      title\n      id\n      slug\n      date\n      category\n      author {\n        ... on Author {\n          remoteTypeName: __typename\n          remoteId: id\n          name\n          title\n          picture {\n            url\n            width\n            height\n          }\n        }\n      }\n      content {\n        json\n      }\n      coverImage {\n        url\n        altText\n        mimeType\n      }\n      images {\n        url\n        altText\n        mimeType\n        width\n        height\n        handle\n      }\n      videos {\n        url\n        altText\n        mimeType\n        handle\n        width\n        height\n      }\n    }\n  }\n"): (typeof documents)["\n  query Project($id: ID!) {\n    project(where: { id: $id }) {\n      createdAt\n      title\n      id\n      slug\n      date\n      category\n      author {\n        ... on Author {\n          remoteTypeName: __typename\n          remoteId: id\n          name\n          title\n          picture {\n            url\n            width\n            height\n          }\n        }\n      }\n      content {\n        json\n      }\n      coverImage {\n        url\n        altText\n        mimeType\n      }\n      images {\n        url\n        altText\n        mimeType\n        width\n        height\n        handle\n      }\n      videos {\n        url\n        altText\n        mimeType\n        handle\n        width\n        height\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ServiceEntries {\n    serviceEntries {\n      id\n      title\n      richTextTitle {\n        raw\n      }\n      description {\n        raw\n      }\n      service {\n        title\n        description {\n          raw\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ServiceEntries {\n    serviceEntries {\n      id\n      title\n      richTextTitle {\n        raw\n      }\n      description {\n        raw\n      }\n      service {\n        title\n        description {\n          raw\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ServiceEntry($id: ID!) {\n    serviceEntry(where: { id: $id }) {\n      id\n      title\n      richTextTitle {\n        raw\n      }\n      description {\n        raw\n      }\n      service {\n        title\n        description {\n          raw\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ServiceEntry($id: ID!) {\n    serviceEntry(where: { id: $id }) {\n      id\n      title\n      richTextTitle {\n        raw\n      }\n      description {\n        raw\n      }\n      service {\n        title\n        description {\n          raw\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query services {\n    services {\n      id\n      title\n      description {\n        text\n        __typename\n      }\n    }\n  }\n"): (typeof documents)["\n  query services {\n    services {\n      id\n      title\n      description {\n        text\n        __typename\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query service($id: ID!) {\n    service(where: { id: $id }) {\n      description {\n        text\n      }\n      title\n      __typename\n    }\n  }\n"): (typeof documents)["\n  query service($id: ID!) {\n    service(where: { id: $id }) {\n      description {\n        text\n      }\n      title\n      __typename\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;