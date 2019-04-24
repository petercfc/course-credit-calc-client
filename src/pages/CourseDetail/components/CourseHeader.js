//other
import React from "react";

//components
import Header from "../../../components/Header";

//main function
function CourseHeader(props) {
  //destructure props
  const { course } = props;

  //main return
  return <Header backUrl="/courses" title={course.name} subTitle="Courses" />;
}

//main export
export default CourseHeader;
