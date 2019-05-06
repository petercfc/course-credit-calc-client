//other
import React from "react";

//components
import Header from "../../../components/Header";
import CourseHeaderMenu from "./CourseHeaderMenu";

//main function
function CourseHeader(props) {
  //destructure props
  const { course } = props;

  //main return
  return (
    <Header title={course.name} subTitle="Courses">
      <CourseHeaderMenu course={course} />
    </Header>
  );
}

//main export
export default CourseHeader;
