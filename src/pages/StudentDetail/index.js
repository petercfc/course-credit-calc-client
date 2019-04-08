//other
import React from "react";
import { StudentDetailProvider } from "./StudentDetailContext";

// apollo
import { GET_STUDENT } from "../../apollo/queries";
import { useQuery } from "react-apollo-hooks";

//material-ui
import PersonIcon from "@material-ui/icons/Person";

//components
import StudentDetailPage from "./components/StudentDetailPage";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import EmptyState from "../../components/EmptyState";

//get id from url
const getCurrentStudentId = props => {
  const { pathname } = props.location;
  const id = pathname.split("/")[2];
  return id.substr(1);
};

//main function
function StudentDetailsView(props) {
  //get the student id from the url pathname
  const studentId = getCurrentStudentId(props);

  //apollo query return student
  const {
    data: { student },
    loading,
    error
  } = useQuery(GET_STUDENT, {
    variables: { id: studentId },
    suspend: false
  });

  if (loading) return <Loading isCircular />;
  if (error) return <Error message={error} />;
  if (student)
    return (
      <StudentDetailProvider>
        <StudentDetailPage student={student} />
      </StudentDetailProvider>
    );
  else
    return (
      <EmptyState
        message="This student does not exist."
        icon={<PersonIcon />}
      />
    );
}

//main export
export default StudentDetailsView;
