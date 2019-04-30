//other
import React from "react";
import t from "typy"; // ES6 style import

//components
import Header from "../../../components/Header";
import StudentHeaderMenu from "./StudentHeaderMenu";

//main function
function StudentHeader(props) {
  //destructure props
  const { student } = props;

  //format title
  const title = `${student.name} - ${student.id || "No enrolled degree"}`;

  //main return
  return (
    <Header backUrl="/students" title={title} subTitle="Students">
      <StudentHeaderMenu student={student} />
    </Header>
  );
}

//main export
export default StudentHeader;
