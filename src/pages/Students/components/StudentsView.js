//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";

//components
import StudentListItem from "./StudentListItem";
import CreateStudentDialog from "./CreateStudentDialog";
import CreateStudentButton from "./CreateStudentButton";

//material-ui styles hook
const useStyles = makeStyles(
  theme => ({
    card: {
      borderRadius: theme.spacing(1)
    },
    contentHeader: {
      paddingBottom: 0
    }
  }),
  { withTheme: true }
);

//main function
function Courses(props) {
  //destructure props
  const { students } = props;

  //material-ui styles hook
  const classes = useStyles();

  //main return
  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardContent className={classes.contentHeader}>
          <Typography variant="h6" gutterBottom>
            Students
          </Typography>
        </CardContent>
        <List>
          {students.map((student, i) => (
            <StudentListItem
              key={student.id}
              student={student}
              hasDivider={students[i + 1] && true}
            />
          ))}
        </List>
      </Card>
      <CreateStudentButton />
      <CreateStudentDialog modalType="createStudent" />
    </React.Fragment>
  );
}

//main export
export default Courses;
