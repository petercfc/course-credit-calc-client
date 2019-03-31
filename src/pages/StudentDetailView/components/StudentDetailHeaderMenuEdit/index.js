//other
import React from "react";

//components
import StudentDetailHeaderMenuEditItem from "../StudentDetailHeaderMenuEditItem";
import StudentDetailHeaderMenuEditDialog from "../StudentDetailHeaderMenuEditDialog";

//main function
function StudentDetailBodyDegreeEdit(props) {
  //modal id
  const id = "editStudent";
  const { student, handleCloseMenu } = props;
  //main return
  return (
    <React.Fragment>
      <StudentDetailHeaderMenuEditItem student={student} id={id} />
      <StudentDetailHeaderMenuEditDialog
        student={student}
        handleCloseMenu={handleCloseMenu}
        id={id}
      />
    </React.Fragment>
  );
}

//main export
export default StudentDetailBodyDegreeEdit;
