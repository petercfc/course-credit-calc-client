//other
import React from "react";

//components
import DepartmentHeader from "./DepartmentHeader";
import DepartmentBody from "./DepartmentBody";
import EditDepartmentName from "./EditDepartmentName";

//main function
function StudentView(props) {
  //destructure props
  const { department } = props;
  //main return
  return (
    <React.Fragment>
      <DepartmentHeader department={department} />
      <DepartmentBody department={department} />
      <EditDepartmentName department={department} />
    </React.Fragment>
  );
}

//main export
export default StudentView;
