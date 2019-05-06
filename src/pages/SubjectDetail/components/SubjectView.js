//other
import React from "react";

//components
import SubjectHeader from "./SubjectHeader";
import SubjectBody from "./SubjectBody";
import EditSubjectName from "./EditSubjectName";

//main function
function StudentView(props) {
  //destructure props
  const { subject, coursesInSubject } = props;
  //main return
  return (
    <React.Fragment>
      <SubjectHeader subject={subject} />
      <SubjectBody subject={subject} coursesInSubject={coursesInSubject} />
      <EditSubjectName subject={subject} />
    </React.Fragment>
  );
}

//main export
export default StudentView;
