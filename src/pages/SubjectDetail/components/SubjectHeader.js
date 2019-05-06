//other
import React from "react";

//components
import Header from "../../../components/Header";
import SubjectHeaderMenu from "./SubjectHeaderMenu";

//main function
function SubjectHeader(props) {
  //destructure props
  const { subject } = props;

  //main return
  return (
    <Header title={subject.name} subTitle="Subjects">
      <SubjectHeaderMenu subject={subject} />
    </Header>
  );
}

//main export
export default SubjectHeader;
