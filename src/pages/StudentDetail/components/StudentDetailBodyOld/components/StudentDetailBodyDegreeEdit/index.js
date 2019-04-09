//other
import React from "react";

//components
import StudentDetailBodyDegreeEditButton from "../StudentDetailBodyDegreeEditButton";
import StudentDetailBodyDegreeEditDialog from "../StudentDetailBodyDegreeEditDialog";

//main function
function EditStudent(props) {
  //modal id
  const id = "editStudent";
  const { student } = props;
  //main return
  return (
    <React.Fragment>
      <StudentDetailBodyDegreeEditButton student={student} id={id} />
      <StudentDetailBodyDegreeEditDialog student={student} id={id} />
    </React.Fragment>
  );
}

//main export
export default EditStudent;
