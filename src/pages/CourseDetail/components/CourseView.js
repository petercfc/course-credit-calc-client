//other
import React from "react";

//components
import CourseHeader from "./CourseHeader";
import CourseBody from "./CourseBody";
import EditCourseName from "./EditCourseName";

//main function
function CourseView(props) {
  //destructure props
  const { course } = props;
  //main return
  return (
    <React.Fragment>
      <CourseHeader course={course} />
      <CourseBody course={course} />
      <EditCourseName course={course} modalType="editCourseName" />
    </React.Fragment>
  );
}

//main export
export default CourseView;
