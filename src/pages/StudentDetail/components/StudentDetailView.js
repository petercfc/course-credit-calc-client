//other
import React, { useEffect } from "react";
import useStudentDetail from "../hooks/useStudentDetail";

//material-ui
import { makeStyles } from "@material-ui/styles";

// apollo
import { GET_STUDENT } from "../../../apollo/queries";
import { useQuery } from "react-apollo-hooks";

//components
import StudentDetailHeader from "../components/StudentDetailHeader";
import StudentDetailBody from "../components/StudentDetailBody";
import Error from "../../../components/Error";
import EmptyState from "../../../components/EmptyState";

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    view: {}
  }),
  { withTheme: true }
);

//main function
function StudentDetailView(props) {
  //destructure props
  const { studentId } = props;

  //material-ui hook
  const classes = useStyles();

  //state hook
  const { setStudent } = useStudentDetail();

  //apollo query return student
  const {
    data: { student },
    error
  } = useQuery(GET_STUDENT, {
    variables: { id: studentId },
    suspend: true
  });

  //return error message
  if (error) return <Error message={error} />;

  //set student when student updates
  useEffect(() => {
    setStudent(student);
  }, [student]);

  return (
    <div className={classes.view}>
      <StudentDetailHeader />
      {/* <StudentDetailBody /> */}
    </div>
  );
}

//main export
export default StudentDetailView;
