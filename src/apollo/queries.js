// apollo
import gql from "graphql-tag";

export const GET_ALL_DEGREES = gql`
  query GetAllDegrees {
    degrees {
      id
      name
    }
  }
`;

export const GET_ALL_DEPARTMENTS = gql`
  query GetAllDepartments {
    departments {
      id
      name
    }
  }
`;

export const GET_ALL_SUBJECTS = gql`
  query GetAllSubjects {
    subjects {
      id
      name
    }
  }
`;

export const GET_ALL_COURSES = gql`
  query getAllCourses {
    courses {
      id
      name
      number
      level
      credits
      subject {
        name
      }
      degree {
        name
      }
      department {
        name
      }
      prerequisite {
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
