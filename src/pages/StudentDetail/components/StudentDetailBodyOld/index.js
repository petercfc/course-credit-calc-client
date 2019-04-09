//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";

//components
import StudentDetailBodyDegree from "./components/StudentDetailBodyDegree";
import StudentDetailBodyCourses from "./components/StudentDetailBodyCourses";

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    root: { paddingTop: theme.spacing(6) }
  }),
  { withTheme: true }
);

//main function
function StudentDetailBody() {
  //use material-ui styles - custom hook
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <StudentDetailBodyDegree />
      <StudentDetailBodyCourses />
    </div>
  );
}

//main export
export default StudentDetailBody;
