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

//material-ui styles hook
const useStyles = makeStyles(
  theme => ({
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
    <Card>
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
  );
}

//main export
export default Courses;
