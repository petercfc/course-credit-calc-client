import gql from "graphql-tag";

export const typeDefs = gql`
  extend type Query {
    selectedStudent: String!
    modals: [Modal]!
  }

  extend type Modal {
    id: ID!
    isOpen: Boolean!
  }
`;
