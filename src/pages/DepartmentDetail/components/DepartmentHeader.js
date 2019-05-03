//other
import React from "react";

//components
import Header from "../../../components/Header";
import DepartmentHeaderMenu from "./DepartmentHeaderMenu";

//main function
function DepartmentHeader(props) {
  //destructure props
  const { department } = props;

  //main return
  return (
    <Header
      backUrl="/departments"
      title={department.name}
      subTitle="Departments"
    >
      <DepartmentHeaderMenu department={department} />
    </Header>
  );
}

//main export
export default DepartmentHeader;
