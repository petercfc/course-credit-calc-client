//other
import React from "react";

//components
import BodyDegreeEditItem from "./BodyDegreeEditItem";
import BodyDegreeEditDialog from "./BodyDegreeEditDialog";

//main function
const BodyDegreeEdit = () => {
  //main return
  return (
    <React.Fragment>
      <BodyDegreeEditItem />
      <BodyDegreeEditDialog />
    </React.Fragment>
  );
};

//main export
export default BodyDegreeEdit;
