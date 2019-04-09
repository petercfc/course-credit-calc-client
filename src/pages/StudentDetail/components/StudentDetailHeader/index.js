//other
import React from "react";
import useStudentDetail from "../../hooks/useStudentDetail";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

//components
import Header from "../../../../components/Header";
import HeaderMenu from "./components/HeaderMenu";
import BackButton from "../../../../components/BackButton";

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
function StudentDetailHeader(props) {
  //use material-ui styles - custom hook
  const classes = useStyles();

  //student detail state hook
  const { student } = useStudentDetail();
  return (
    <Header>
      <BackButton />
      <Typography className={classes.title} variant="h6" noWrap>
        {student && student.name}
      </Typography>

      {student && <HeaderMenu student={student} />}
    </Header>
  );
}

//main export
export default StudentDetailHeader;
