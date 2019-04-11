//other
import React from "react";

//components
import BodyDegreeEditButton from "./BodyDegreeEditButton";
import BodyDegreeEditDialog from "./BodyDegreeEditDialog";

//main function
const BodyDegreeEdit = () => {
  //main return
  return (
    <React.Fragment>
      <BodyDegreeEditButton />
      <BodyDegreeEditDialog />
    </React.Fragment>
  );
};

//main export
export default BodyDegreeEdit;
