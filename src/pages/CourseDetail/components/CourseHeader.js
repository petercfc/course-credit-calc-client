//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";

//components
import Header from "../../../components/Header";

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    title: {
      flexGrow: 1,
      fontWeight: 400
    }
  }),
  { withTheme: true }
);

//main function
function CourseHeader(props) {
  //destructure props
  const { course } = props;
  //material-ui hook
  const classes = useStyles();

  //main return
  return <Header backUrl="/courses" title={course.name} subTitle="Courses" />;
}

//main export
export default CourseHeader;
