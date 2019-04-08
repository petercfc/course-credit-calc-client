//other
import React, { useEffect } from "react";
import useStudentDetail from "../../hooks/useStudentDetail";

//components
import StudentDetailHeader from "../StudentDetailHeader";
import StudentDetailBody from "../StudentDetailBody";

//main function
function StudentDetailsView(props) {
  const { setStudent } = useStudentDetail();
  const { student } = props;

  useEffect(() => {
    setStudent(student);
  }, []);

  return (
    <React.Fragment>
      <StudentDetailHeader studentId={student.id} />
      {/* <StudentDetailBody student={student} /> */}
    </React.Fragment>
  );
}

//main export
export default StudentDetailsView;
