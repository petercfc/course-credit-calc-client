//other
import React from "react";

//apollo
import { useQuery } from "react-apollo-hooks";
import { GET_SUBJECT } from "apollo/queries";
import { GET_COURSES_IN_SUBJECT } from "apollo/queries";

//components
import SubjectView from "./components/SubjectView";
import Error from "components/Error";

//main function
function SubjectDetail(props) {
  //destructure props
  const {
    match: { params }
  } = props;

  //apollo query hook
  const {
    data: { subject },
    error
  } = useQuery(GET_SUBJECT, {
    suspend: true,
    variables: { id: params.id }
  });

  //apollo query hook
  const {
    data: { courses }
  } = useQuery(GET_COURSES_IN_SUBJECT, {
    suspend: true,
    variables: { id: params.id }
  });

  //error return
  if (error) {
    return <Error message={error.message} />;
  }

  // //main return
  return <SubjectView subject={subject} coursesInSubject={courses} />;
}

//main export
export default SubjectDetail;
