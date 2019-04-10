//other
import React from "react";
import useStudentDetail from "../../../hooks/useStudentDetail";

//material-ui
import { makeStyles } from "@material-ui/styles";
import ListIcon from "@material-ui/icons/List";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemText from "@material-ui/core/ListItemText";

//components
import EmptyState from "../../../../../components/EmptyState";

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
const BodyCourses = () => {
  //use material-ui styles - custom hook
  const classes = useStyles();
  //student detail state hook
  const { student } = useStudentDetail();

  //calc credits passed
  const calcCredits = student => {
    if (student) {
      let creditsPassed = student.coursesPassed.reduce((acc, course) => {
        return acc + course.credits;
      }, 0);
      return creditsPassed;
    } else {
      return 0;
    }
  };

  //main return
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          {student &&
          Array.isArray(student.coursesPassed) &&
          student.coursesPassed.length ? (
            <React.Fragment>
              <Typography variant="body1" gutterBottom>
                Credits Passed - {calcCredits(student)}
              </Typography>
              <List className={classes.root}>
                <ListSubheader>Courses Passed</ListSubheader>
                {student.coursesPassed.map(course => (
                  <ListItem key={course.id}>
                    <ListItemText variant="body2">
                      {course.name} - {course.credits}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </React.Fragment>
          ) : (
            <EmptyState
              message="This student has not completed any courses."
              icon={<ListIcon />}
            />
          )}
        </CardContent>
        <CardActions className={classes.actions} />
      </Card>
    </div>
  );
};

//main export
export default BodyCourses;
