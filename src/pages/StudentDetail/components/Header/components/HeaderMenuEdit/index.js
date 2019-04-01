//other
import React from "react";

//components
import HeaderMenuEditItem from "../HeaderMenuEditItem";
import HeaderMenuEditDialog from "../HeaderMenuEditDialog";

//main function
function HeaderMenuEdit(props) {
  //modal id
  const id = "editStudent";
  const { student } = props;
  //main return
  return (
    <React.Fragment>
      <HeaderMenuEditItem student={student} id={id} />
      <HeaderMenuEditDialog student={student} id={id} />
    </React.Fragment>
  );
}

//main export
export default HeaderMenuEdit;
