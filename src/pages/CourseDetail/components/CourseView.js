//other
import React from "react";

//components
import CourseHeader from "./CourseHeader";

//main function
function CourseView(props) {
  //destructure props
  const { course } = props;
  //main return
  return <CourseHeader course={course} />;
}

//main export
export default CourseView;
