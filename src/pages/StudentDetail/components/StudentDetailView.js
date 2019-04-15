//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";

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
const StudentDetailView = props => {
  //destructure props
  const { studentId } = props;

  //material-ui hook
  const classes = useStyles();

  //main
  return (
    <div className={classes.view}>
      <StudentDetailHeader />
      <StudentDetailBody modalType="editStudentName" />
    </div>
  );
};

//main export
export default StudentDetailView;
