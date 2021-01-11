const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    email: String!
    username: String!
    bio: String
    image: String
    token: String
  }

  type UserPayload {
    user: User
  }

  type Query {
    foo: String
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input CreateUserInput {
    username: String!
    email: String!
    password: String!
  }

  type Mutation {
    login(user: LoginInput): UserPayload
    createUser(user: CreateUserInput): UserPayload
  }
`

module.exports = typeDefs
