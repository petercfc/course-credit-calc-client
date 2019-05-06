//other
import React from "react";

//components
import Header from "../../../components/Header";
import DegreeHeaderMenu from "./DegreeHeaderMenu";

//main function
function DegreeHeader(props) {
  //destructure props
  const { degree } = props;

  //main return
  return (
    <Header title={degree.name} subTitle="Degrees">
      <DegreeHeaderMenu degree={degree} />
    </Header>
  );
}

//main export
export default DegreeHeader;
