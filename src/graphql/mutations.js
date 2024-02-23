/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
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
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
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
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
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
export const createBookUser = /* GraphQL */ `
  mutation CreateBookUser(
    $input: CreateBookUserInput!
    $condition: ModelBookUserConditionInput
  ) {
    createBookUser(input: $input, condition: $condition) {
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
export const updateBookUser = /* GraphQL */ `
  mutation UpdateBookUser(
    $input: UpdateBookUserInput!
    $condition: ModelBookUserConditionInput
  ) {
    updateBookUser(input: $input, condition: $condition) {
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
export const deleteBookUser = /* GraphQL */ `
  mutation DeleteBookUser(
    $input: DeleteBookUserInput!
    $condition: ModelBookUserConditionInput
  ) {
    deleteBookUser(input: $input, condition: $condition) {
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
