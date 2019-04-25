//other
import React from "react";

//apollo
import { useQuery } from "react-apollo-hooks";
import { GET_ALL_COURSES } from "../../apollo/queries";

//components
import CoursesView from "./components/CoursesView";
import Error from "../../components/Error";

//main function
function Courses() {
  //apollo query hook
  const {
    data: { courses },
    error
  } = useQuery(GET_ALL_COURSES, {
    suspend: true,
    variables: { orderBy: "name_ASC" }
  });

  //error return
  if (error) {
    return <Error message={error.message} />;
  }
  //main return
  return <CoursesView courses={courses} />;
}

//main export
export default Courses;
