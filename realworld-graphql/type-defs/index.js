const { gql } = require('apollo-server-express')

const typeDefs = gql`
  directive @upper on FIELD_DEFINITION
  directive @auth on FIELD_DEFINITION

  type User {
    email: String!
    # username: String! @deprecated(reason: "请使用 newUsername")
    username: String!
    bio: String
    image: String
    token: String
  }

  type UserPayload {
    user: User
  }

  type Query {
    # foo: String @upper
    foo: String @auth @upper
    currentUser: User @auth
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
