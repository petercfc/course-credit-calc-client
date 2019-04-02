//other
import React from "react";

//components
import StudentDetailBodyCoursesEditButton from "../StudentDetailBodyCoursesEditButton";
import StudentDetailBodyCoursesEditDialog from "../StudentDetailBodyCoursesEditDialog";

//main function
function StudentDetailBodyCoursesEdit(props) {
  //modal id
  const id = "editStudentCourses";
  const { student } = props;
  //main return
  return (
    <React.Fragment>
      <StudentDetailBodyCoursesEditButton student={student} id={id} />
      <StudentDetailBodyCoursesEditDialog student={student} id={id} />
    </React.Fragment>
  );
}

//main export
export default StudentDetailBodyCoursesEdit;
