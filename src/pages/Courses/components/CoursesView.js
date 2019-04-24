//other
import React from "react";

//material-ui
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";

//components
import CoursesListItem from "./CoursesListItem";

//main function
function Courses(props) {
  //destructure props
  const { courses } = props;

  //main return
  return (
    <Card>
      <List>
        <ListSubheader>Courses</ListSubheader>
        {courses.map(course => (
          <CoursesListItem key={course.id} course={course} />
        ))}
      </List>
    </Card>
  );
}

//main export
export default Courses;
