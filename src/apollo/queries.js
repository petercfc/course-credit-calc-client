// apollo
import gql from "graphql-tag";

export const GET_ALL_COURSES = gql`
  query getAllCourses($orderBy: CourseOrderByInput) {
    courses(orderBy: $orderBy) {
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

export const GET_ALL_STUDENTS = gql`
  query getAllStudents {
    students {
      id
      name
      enrolledDegree {
        id
        name
        requiredCredits
      }
      coursesPassed {
        id
        name
      }
    }
  }
`;

export const GET_STUDENT = gql`
  query getStudent($id: ID!) {
    student(where: { id: $id }) {
      id
      name
      enrolledDegree {
        id
        name
        requiredCredits
      }
      coursesPassed {
        id
        name
        credits
      }
    }
  }
`;

export const GET_COURSE = gql`
  query getCourse($id: ID!) {
    course(where: { id: $id }) {
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
        requiredCredits
      }
      department {
        id
        name
      }
      prerequisite {
        id
        name
        number
        level
        credits
      }
    }
  }
`;

export const GET_COURSES_IN_DEPARTMENT = gql`
  query getCoursesInDepartment($id: ID!) {
    courses(where: { department: { id: $id } }) {
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

export const GET_DEGREES_IN_DEPARTMENT = gql`
  query getDegreesInDepartment($id: ID!) {
    degrees(where: { department: { id: $id } }) {
      id
      name
    }
  }
`;

export const GET_ALL_SUBJECTS = gql`
  query getAllSubjects($orderBy: SubjectOrderByInput) {
    subjects(orderBy: $orderBy) {
      id
      name
    }
  }
`;

export const GET_SUBJECT = gql`
  query getSubject($id: ID!) {
    subject(where: { id: $id }) {
      id
      name
    }
  }
`;

export const GET_COURSES_IN_SUBJECT = gql`
  query getCoursesInSubject($id: ID!) {
    courses(where: { subject: { id: $id } }) {
      id
      name
    }
  }
`;

export const GET_ALL_DEPARTMENTS = gql`
  query getAllDepartments($orderBy: DepartmentOrderByInput) {
    departments(orderBy: $orderBy) {
      id
      name
    }
  }
`;

export const GET_DEPARTMENT = gql`
  query getDepartment($id: ID!) {
    department(where: { id: $id }) {
      id
      name
    }
  }
`;

export const GET_ALL_DEGREES = gql`
  query getAllDegrees($orderBy: DegreeOrderByInput) {
    degrees(orderBy: $orderBy) {
      id
      name
    }
  }
`;
