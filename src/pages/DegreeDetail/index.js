//other
import React from "react";

//apollo
import { useQuery } from "react-apollo-hooks";
import { GET_DEGREE } from "apollo/queries";
import { GET_COURSES_IN_DEGREE } from "apollo/queries";

//components
import DegreeView from "./components/DegreeView";
import Error from "components/Error";

//main function
function DegreeDetail(props) {
  //destructure props
  const {
    match: { params }
  } = props;

  //apollo query hook
  const {
    data: { degree },
    error
  } = useQuery(GET_DEGREE, {
    suspend: true,
    variables: { id: params.id }
  });

  //apollo query hook
  const {
    data: { courses }
  } = useQuery(GET_COURSES_IN_DEGREE, {
    suspend: true,
    variables: { id: params.id }
  });

  //error return
  if (error) {
    return <Error message={error.message} />;
  }

  // //main return
  return <DegreeView degree={degree} coursesInDegree={courses} />;
}

//main export
export default DegreeDetail;
