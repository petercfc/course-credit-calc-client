//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";

//components
import CoursesListItem from "./CoursesListItem";
import CreateCourseDialog from "./CreateCourseDialog";
import CreateCourseButton from "./CreateCourseButton";

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
  const { courses } = props;

  //material-ui styles hook
  const classes = useStyles();

  //main return
  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardContent className={classes.contentHeader}>
          <Typography variant="h6" gutterBottom>
            Courses
          </Typography>
        </CardContent>
        <List>
          {courses.map((course, i) => (
            <CoursesListItem
              key={course.id}
              course={course}
              hasDivider={courses[i + 1] && true}
            />
          ))}
        </List>
      </Card>
      <CreateCourseButton />
      <CreateCourseDialog modalType="createCourse" />
    </React.Fragment>
  );
}

//main export
export default Courses;
