// apollo
import gql from "graphql-tag";

export const TOGGLE_MODAL = gql`
  mutation ToggleModal($id: Int!) {
    toggleModal(id: $id) @client
  }
`;

export const CREATE_STUDENT = gql`
  mutation createStudent($data: StudentCreateInput!) {
    createStudent(data: $data) {
      id
      name
      enrolledDegree {
        id
        name
      }
      coursesPassed {
        id
        name
      }
    }
  }
`;

export const UPDATE_STUDENT = gql`
  mutation updateStudent(
    $data: StudentUpdateInput!
    $where: StudentWhereUniqueInput!
  ) {
    updateStudent(data: $data, where: $where) {
      id
      name
      enrolledDegree {
        id
        name
      }
      coursesPassed {
        id
        name
      }
    }
  }
`;

export const DELETE_STUDENT = gql`
  mutation deleteStudent($id: ID!) {
    deleteStudent(where: { id: $id }) {
      id
      name
    }
  }
`;
