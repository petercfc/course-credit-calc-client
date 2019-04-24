//other
import React from "react";

//material-ui
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";

//components
import CoursesListItem from "./CoursesListItem";

//main function
function Courses(props) {
  //destructure props
  const { courses } = props;

  //main return
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Courses
        </Typography>

        <List>
          {courses.map((course, i) => (
            <CoursesListItem
              key={course.id}
              course={course}
              isLast={courses[i + 1] && true}
            />
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

//main export
export default Courses;
