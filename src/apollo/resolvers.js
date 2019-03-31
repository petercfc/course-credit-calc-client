import gql from "graphql-tag";

export const resolvers = {
  Mutation: {
    toggleModal: (_root, variables, { cache, getCacheKey }) => {
      const id = getCacheKey({ __typename: "Modal", id: variables.id });
      const fragment = gql`
        fragment openModal on Modal {
          isOpen
        }
      `;
      const modal = cache.readFragment({ fragment, id });
      const data = { ...modal, isOpen: !modal.isOpen };
      cache.writeData({ id, data });
      return data;
    }
  },
  Query: {
    getModal: (_root, variables, { cache, getCacheKey }) => {
      const id = getCacheKey({ __typename: "Modal", id: variables.id });
      const fragment = gql`
        fragment openModal on Modal {
          id
          isOpen
        }
      `;
      const modal = cache.readFragment({ fragment, id });
      return modal;
    }
  }
};
