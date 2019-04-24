//other
import React from "react";

//components
import Header from "../../../components/Header";

//main function
function CourseHeader(props) {
  //destructure props
  const { course } = props;

  //format title
  const title = `${course.name} - ${course.number}`;

  //main return
  return <Header backUrl="/courses" title={title} subTitle="Courses" />;
}

//main export
export default CourseHeader;
