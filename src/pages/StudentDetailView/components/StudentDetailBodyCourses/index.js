//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemText from "@material-ui/core/ListItemText";

//components
import EmptyState from "../../../../components/EmptyState";

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    root: {},
    actions: {
      justifyContent: "flex-end"
    }
  }),
  { withTheme: true }
);

//main function
function StudentDetailContentCourses(props) {
  //use material-ui styles - custom hook
  const classes = useStyles();
  const { student } = props;

  //calculate total number of credits passed
  const creditsPassed = student.coursesPassed.reduce((acc, course) => {
    return acc + course.credits;
  }, 0);

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          {student.coursesPassed && student.coursesPassed.length ? (
            <React.Fragment>
              <Typography variant="body1" gutterBottom>
                Credits Passed - {creditsPassed}
              </Typography>
              <List className={classes.root}>
                <ListSubheader>Courses Passed</ListSubheader>
                {student.coursesPassed.map(course => (
                  <ListItem key={course.id}>
                    <ListItemText variant="body2" gutterBottom>
                      {course.name} - {course.credits}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
              <Typography variant="body1" gutterBottom>
                Credits Remaining -{" "}
                {student.enrolledDegree.requiredCredits - creditsPassed}
              </Typography>
              <List className={classes.root}>
                <ListSubheader>Required Courses Remaining</ListSubheader>
                {student.coursesPassed.map(course => (
                  <ListItem key={course.id}>
                    <ListItemText variant="body2" gutterBottom>
                      {course.name} - {course.credits}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </React.Fragment>
          ) : (
            <EmptyState
              message="This student has not passed any courses."
              icon={<PersonIcon />}
            />
          )}
        </CardContent>
        <CardActions className={classes.actions}>
          <Button color="primary" size="small">
            Edit Courses
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

//main export
export default StudentDetailContentCourses;
