//other
import React from "react";

//apollo
import { useQuery } from "react-apollo-hooks";
import { GET_ALL_COURSES } from "../../apollo/queries";

//components
import CoursesView from "./components/CoursesView";

//main function
function Courses() {
  //apollo query hook
  const {
    data: { courses },
    error
  } = useQuery(GET_ALL_COURSES, {
    suspend: true
  });

  //main return
  return <CoursesView courses={courses} />;
}

//main export
export default Courses;
