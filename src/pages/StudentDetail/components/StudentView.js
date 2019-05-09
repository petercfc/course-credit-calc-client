//other
import React from "react";

//components
import StudentHeader from "./StudentHeader";
import StudentBody from "./StudentBody";
import EditStudentName from "./EditStudentName";
import EditCoursesCompletedButton from "./EditCoursesCompletedButton";
import EditCoursesCompletedDialog from "./EditCoursesCompletedDialog";
import EditEnrolledDegreeDialog from "./EditEnrolledDegreeDialog";

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
      <EditCoursesCompletedButton student={student} />
      <EditCoursesCompletedDialog student={student} />
      <EditEnrolledDegreeDialog student={student} />
    </React.Fragment>
  );
}

//main export
export default StudentView;
