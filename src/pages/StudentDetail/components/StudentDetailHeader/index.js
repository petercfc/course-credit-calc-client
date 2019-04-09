//other
import React from "react";
import useStudentDetail from "../../hooks/useStudentDetail";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

//components
import Header from "../../../../components/Header";
import HeaderMenu from "./components/HeaderMenu";
import HeaderBack from "./components/HeaderBack";

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
function StudentDetailHeader() {
  //material-ui hook
  const classes = useStyles();

  //state hook
  const { student } = useStudentDetail();

  //main return
  return (
    <Header>
      <HeaderBack />
      <Typography className={classes.title} variant="h6" noWrap>
        {student.name}
      </Typography>
      <HeaderMenu />
    </Header>
  );
}

//main export
export default StudentDetailHeader;
