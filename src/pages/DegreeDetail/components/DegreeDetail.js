//other
import React from "react";

//components
import DegreeHeader from "./DegreeHeader";
import DegreeBody from "./DegreeBody";
import EditDegreeName from "./EditDegreeName";

//main function
function StudentView(props) {
  //destructure props
  const { degree, coursesInDegree } = props;
  //main return
  return (
    <React.Fragment>
      <DegreeHeader degree={degree} />
      <DegreeBody degree={degree} coursesInDegree={coursesInDegree} />
      <EditDegreeName degree={degree} />
    </React.Fragment>
  );
}

//main export
export default StudentView;
