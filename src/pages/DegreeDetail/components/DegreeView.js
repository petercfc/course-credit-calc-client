//other
import React from "react";

//components
import DegreeHeader from "./DegreeHeader";
import DegreeBody from "./DegreeBody";
import EditDegreeName from "./EditDegreeName";
import EditDegreeRequiredCredits from "./EditDegreeRequiredCredits";

//main function
function DegreeView(props) {
  //destructure props
  const { degree, coursesInDegree } = props;
  //main return
  return (
    <React.Fragment>
      <DegreeHeader degree={degree} />
      <DegreeBody degree={degree} coursesInDegree={coursesInDegree} />
      <EditDegreeName degree={degree} />
      <EditDegreeRequiredCredits degree={degree} />
    </React.Fragment>
  );
}

//main export
export default DegreeView;
