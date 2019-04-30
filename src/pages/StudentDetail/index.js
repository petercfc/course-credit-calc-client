//other
import React from "react";

//apollo
import { useQuery } from "react-apollo-hooks";
import { GET_STUDENT } from "../../apollo/queries";

//components
import StudentView from "./components/StudentView";
import Error from "../../components/Error";

//main function
function StudentDetail(props) {
  //destructure props
  const {
    match: { params }
  } = props;
  //apollo query hook
  const {
    data: { student },
    error
  } = useQuery(GET_STUDENT, {
    suspend: true,
    variables: { id: params.id }
  });

  //error return
  if (error) {
    return <Error message={error.message} />;
  }

  // //main return
  return <StudentView student={student} />;
}

//main export
export default StudentDetail;
