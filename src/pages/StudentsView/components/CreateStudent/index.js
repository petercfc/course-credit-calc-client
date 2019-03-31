//other
import React from "react";

//components
import CreateStudentButton from "../CreateStudentButton";
import CreateStudentDialog from "../CreateStudentDialog";

//main function
function CreateStudent() {
  //modal id
  const id = "createStudent";
  //main return
  return (
    <React.Fragment>
      <CreateStudentButton id={id} />
      <CreateStudentDialog id={id} />
    </React.Fragment>
  );
}

//main export
export default CreateStudent;
