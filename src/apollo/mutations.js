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
      number
      level
      credits
      subject {
        id
        name
      }
      degree {
        id
        name
      }
      department {
        id
        name
      }
      prerequisite {
        id
        name
      }
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

export const DELETE_COURSE = gql`
  mutation deleteCourse($id: ID!) {
    deleteCourse(where: { id: $id }) {
      id
      name
    }
  }
`;

export const CREATE_DEPARTMENT = gql`
  mutation createDepartment($data: DepartmentCreateInput!) {
    createDepartment(data: $data) {
      id
      name
    }
  }
`;

export const DEPARTMENT = gql`
  mutation updateDepartment(
    $data: DepartmentUpdateInput!
    $where: DepartmentWhereUniqueInput!
  ) {
    updateDepartment(data: $data, where: $where) {
      id
      name
    }
  }
`;

export const UPDATE_DEPARTMENT = gql`
  mutation updateDepartment(
    $data: DepartmentUpdateInput!
    $where: DepartmentWhereUniqueInput!
  ) {
    updateDepartment(data: $data, where: $where) {
      id
      name
    }
  }
`;

export const DELETE_DEPARTMENT = gql`
  mutation deleteDepartment($id: ID!) {
    deleteDepartment(where: { id: $id }) {
      id
      name
    }
  }
`;

export const CREATE_SUBJECT = gql`
  mutation createSubject($data: SubjectCreateInput!) {
    createSubject(data: $data) {
      id
      name
    }
  }
`;

export const UPDATE_SUBJECT = gql`
  mutation updateSubject(
    $data: SubjectUpdateInput!
    $where: SubjectWhereUniqueInput!
  ) {
    updateSubject(data: $data, where: $where) {
      id
      name
    }
  }
`;

export const DELETE_SUBJECT = gql`
  mutation deleteSubject($id: ID!) {
    deleteSubject(where: { id: $id }) {
      id
      name
    }
  }
`;

export const CREATE_DEGREE = gql`
  mutation createDegree($data: DegreeCreateInput!) {
    createDegree(data: $data) {
      id
      name
      requiredCredits
    }
  }
`;

export const UPDATE_DEGREE = gql`
  mutation updateDegree(
    $data: DegreeUpdateInput!
    $where: DegreeWhereUniqueInput!
  ) {
    updateDegree(data: $data, where: $where) {
      id
      name
      requiredCredits
    }
  }
`;

export const DELETE_DEGREE = gql`
  mutation deleteDegree($id: ID!) {
    deleteDegree(where: { id: $id }) {
      id
      name
      requiredCredits
    }
  }
`;
