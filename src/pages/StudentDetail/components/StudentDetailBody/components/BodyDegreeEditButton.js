//other
import React from "react";
import useStudentDetail from "../../../hooks/useStudentDetail";

//material-ui
import Button from "@material-ui/core/Button";

//main function
function BodyDegreeEditButton() {
  //use context state hook
  const { toggleModal } = useStudentDetail();
  //main return
  return (
    <Button
      onClick={() => {
        toggleModal("editDegree");
      }}
    >
      Change Degree
    </Button>
  );
}

//main export
export default BodyDegreeEditButton;
