//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import PeopleIcon from "@material-ui/icons/People";
import Card from "@material-ui/core/Card";

//components
import StudentsBodyListItem from "../StudentsBodyListItem";
import EmptyState from "../../../../components/EmptyState";

//material-ui styles - custom hook
const useStyles = makeStyles(
  () => ({
    root: {}
  }),
  { withTheme: true }
);

//main function
function StudentsViewBody(props) {
  //use material-ui styles - custom hook
  const classes = useStyles();
  const { students } = props;
  //main return
  return (
    <Card className={classes.card}>
      {students && students.length ? (
        <List className={classes.root}>
          <ListSubheader>Students</ListSubheader>
          {students.map(student => (
            <StudentsBodyListItem key={student.id} student={student} />
          ))}
        </List>
      ) : (
        <EmptyState
          message="There are currently no students. Create one via the button bellow."
          icon={<PeopleIcon />}
        />
      )}
    </Card>
  );
}

//main export
export default StudentsViewBody;
