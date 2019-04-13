//other
import React from "react";

//components
import StudentDetailView from "./components/StudentDetailView";

//main function
const StudentDetail = props => {
  //destructure props
  const {
    location: { pathname },
    modals
  } = props;

  //get the student id from the url string
  const extractStudentId = pathname => {
    const id = pathname.split("/")[2];
    return id.substr(1);
  };

  //main return
  return <StudentDetailView studentId={extractStudentId(pathname)} />;
};
//main export
export default StudentDetail;
