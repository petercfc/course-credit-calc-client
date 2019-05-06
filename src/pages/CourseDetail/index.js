//other
import React from "react";

//apollo
import { useQuery } from "react-apollo-hooks";
import { GET_COURSE } from "apollo/queries";

//components
import CourseView from "./components/CourseView";
import Error from "components/Error";

//main function
function CourseDetail(props) {
  //destructure props
  const {
    match: { params }
  } = props;

  //apollo query hook
  const {
    data: { course },
    error
  } = useQuery(GET_COURSE, {
    suspend: true,
    variables: { id: params.id }
  });

  //error return
  if (error) {
    return <Error message={error.message} />;
  }

  // //main return
  return <CourseView course={course} />;
}

//main export
export default CourseDetail;
