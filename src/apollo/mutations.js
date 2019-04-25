// apollo
import gql from "graphql-tag";

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

export const CREATE_COURSE = gql`
  mutation createCourse($data: CourseCreateInput!) {
    createCourse(data: $data) {
      id
      name
    }
  }
`;

export const UPDATE_COURSE = gql`
  mutation updateCourse(
    $data: CourseUpdateInput!
    $where: CourseWhereUniqueInput!
  ) {
    updateCourse(data: $data, where: $where) {
      id
      name
    }
  }
`;
