//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

//components
import Header from "../../../../components/Header";
import StudentDetailHeaderMenu from "../StudentDetailHeaderMenu";
import BackButton from "../../../../components/BackButton";

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    title: {
      flexGrow: 1
      // fontWeight: 400
    }
  }),
  { withTheme: true }
);

//main function
function StudentDetailHeader(props) {
  //use material-ui styles - custom hook
  const classes = useStyles();
  const { student } = props;

  return (
    <Header>
      <BackButton />
      <Typography
        className={classes.title}
        color="textSecondary"
        variant="h6"
        noWrap
      >
        {student.name}
      </Typography>
      <StudentDetailHeaderMenu student={student} />
    </Header>
  );
}

//main export
export default StudentDetailHeader;
