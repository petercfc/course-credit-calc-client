//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";

//components
import BodyDegree from "./components/BodyDegree";
import BodyCourses from "./components/BodyCourses";

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    root: { paddingTop: theme.spacing(6) }
  }),
  { withTheme: true }
);

//main function
const StudentDetailBody = props => {
  //destructure props
  const { student } = props;
  //use material-ui styles - custom hook
  const classes = useStyles();

  //main return
  return (
    <div className={classes.root}>
      <BodyDegree student={student} />
      <BodyCourses />
    </div>
  );
};

//main export
export default StudentDetailBody;
