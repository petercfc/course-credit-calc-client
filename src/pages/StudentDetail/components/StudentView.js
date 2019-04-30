//other
import React from "react";

//components
import StudentHeader from "./StudentHeader";
import StudentBody from "./StudentBody";
import EditStudentName from "./EditStudentName";

//main function
function StudentView(props) {
  //destructure props
  const { student } = props;
  //main return
  return (
    <React.Fragment>
      <StudentHeader student={student} />
      <StudentBody student={student} />
      <EditStudentName student={student} modalType="editStudentName" />
    </React.Fragment>
  );
}

//main export
export default StudentView;
