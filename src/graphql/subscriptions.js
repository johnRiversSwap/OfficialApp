/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook($filter: ModelSubscriptionBookFilterInput) {
    onCreateBook(filter: $filter) {
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
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook($filter: ModelSubscriptionBookFilterInput) {
    onUpdateBook(filter: $filter) {
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
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook($filter: ModelSubscriptionBookFilterInput) {
    onDeleteBook(filter: $filter) {
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
export const onCreateBookUser = /* GraphQL */ `
  subscription OnCreateBookUser($filter: ModelSubscriptionBookUserFilterInput) {
    onCreateBookUser(filter: $filter) {
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
export const onUpdateBookUser = /* GraphQL */ `
  subscription OnUpdateBookUser($filter: ModelSubscriptionBookUserFilterInput) {
    onUpdateBookUser(filter: $filter) {
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
export const onDeleteBookUser = /* GraphQL */ `
  subscription OnDeleteBookUser($filter: ModelSubscriptionBookUserFilterInput) {
    onDeleteBookUser(filter: $filter) {
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
