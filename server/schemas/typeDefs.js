const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Query {
  me: User
  users: [User]
  user(username: String!): User
  books(username: String): [Book]
  book(_id: ID!): Book

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(book: String!): Book
  removeBook(_id: ID!): User

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    authors: String
    description: String
    title: string
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  }
    
  }
`;

module.exports = typeDefs;
