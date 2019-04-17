//other
import React from "react";

//apollo
import { useQuery } from "react-apollo-hooks";
import { GET_STUDENT } from "../../apollo/queries";

//components
import StudentDetailView from "./components/StudentDetailView";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

//get the student id from the url string
const extractStudentId = pathname => {
  const id = pathname.split("/")[2];
  return id.substr(1);
};

//main function
const StudentDetail = props => {
  //destructure props
  const {
    location: { pathname }
  } = props;

  //apollo query for student
  const {
    data: { student },
    error
  } = useQuery(GET_STUDENT, {
    suspend: true,
    variables: { id: extractStudentId(pathname) }
  });

  //on error
  if (error) {
    return <Error message={error.message} />;
  }

  //main return
  if (student) {
    return <StudentDetailView student={student} />;
  }
};
//main export
export default StudentDetail;
