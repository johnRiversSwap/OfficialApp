/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      surname
      typeOfID
      nationality
      birthday
      lat
      ln
      image
      rating
      books {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        surname
        typeOfID
        nationality
        birthday
        lat
        ln
        image
        rating
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      title
      language
      author
      image
      ISBN
      rating
      description
      status
      Users {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        language
        author
        image
        ISBN
        rating
        description
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBookUser = /* GraphQL */ `
  query GetBookUser($id: ID!) {
    getBookUser(id: $id) {
      id
      userId
      bookId
      user {
        id
        name
        surname
        typeOfID
        nationality
        birthday
        lat
        ln
        image
        rating
        createdAt
        updatedAt
        __typename
      }
      book {
        id
        title
        language
        author
        image
        ISBN
        rating
        description
        status
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBookUsers = /* GraphQL */ `
  query ListBookUsers(
    $filter: ModelBookUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        bookId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const bookUsersByUserId = /* GraphQL */ `
  query BookUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        bookId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const bookUsersByBookId = /* GraphQL */ `
  query BookUsersByBookId(
    $bookId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookUsersByBookId(
      bookId: $bookId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        bookId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
