const { gql } = require("apollo-server");

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
  }

  input NewPetInput {
    name: String
    type: String
  }

  type Query {
    pets(input: NewPetInput): [Pet]!
    pet(input: NewPetInput): Pet
  }
`;

module.exports = typeDefs;
