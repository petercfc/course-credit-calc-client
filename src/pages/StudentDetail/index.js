//other
import React, { Suspense } from "react";
import { StudentDetailProvider } from "./components/StudentDetailContext";

//components
import Loading from "../../components/Loading";
import StudentDetailView from "./components/StudentDetailView";

//main function
function StudentDetail(props) {
  //destructure props
  const {
    location: { pathname }
  } = props;

  //get the student id from the url string
  const studentId = pathname => {
    const id = pathname.split("/")[2];
    return id.substr(1);
  };

  //main return
  return (
    <StudentDetailProvider>
      <Suspense fallback={<Loading isCircular />}>
        <StudentDetailView studentId={studentId(pathname)} />
      </Suspense>
    </StudentDetailProvider>
  );
}

//main export
export default StudentDetail;
