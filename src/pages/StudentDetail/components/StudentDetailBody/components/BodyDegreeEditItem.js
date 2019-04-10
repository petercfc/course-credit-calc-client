//other
import React from "react";
import useStudentDetail from "../../../hooks/useStudentDetail";

//material-ui
import Button from "@material-ui/core/Button";

//main function
function BodyDegreeEditItem() {
  //use context state hook
  const { editDegreeModalToggle } = useStudentDetail();
  //main return
  return (
    <Button
      onClick={() => {
        editDegreeModalToggle();
      }}
    >
      Change Degree
    </Button>
  );
}

//main export
export default BodyDegreeEditItem;
