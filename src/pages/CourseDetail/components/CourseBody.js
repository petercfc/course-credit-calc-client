//other
import React from "react";
import t from "typy"; // ES6 style import

//material-ui
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

//components

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    root: { paddingTop: theme.spacing(6) }
  }),
  { withTheme: true }
);

//main function
function CourseBody(props) {
  //destructure props
  const { course } = props;
  console.log(course);
  //use material-ui styles - custom hook
  const classes = useStyles();

  //check for null
  const subjectName = t(course, "subject.name").safeString;
  const degreeName = t(course, "degree.name").safeString;
  const departmentName = t(course, "department.name").safeString;
  const prerequisiteName = t(course, "prerequisite.name").safeString;

  //main return
  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Description
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque mi nulla, auctor id vestibulum vel, posuere a eros.
            Vivamus viverra et risus sed luctus. Cras auctor ligula ut ipsum
            condimentum, sit amet mattis felis fringilla. Suspendisse potenti.
            Proin pellentesque dui vel lacus tincidunt aliquam. Donec aliquet
            augue non tellus consectetur suscipit ac sed sapien. Curabitur
            commodo dui eu sagittis sagittis. Ut ac orci quis ipsum ornare
            dignissim vitae vitae tortor.
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6">Details</Typography>
        </CardContent>
        <List>
          <ListItem button divider>
            <ListItemText primary="Name" secondary={course.name} />
          </ListItem>
          <ListItem button divider>
            <ListItemText primary="Credits" secondary={course.credits} />
          </ListItem>
          <ListItem button divider>
            <ListItemText primary="Number" secondary={course.number} />
          </ListItem>
          <ListItem button divider>
            <ListItemText primary="Level" secondary={course.level} />
          </ListItem>
          <ListItem button divider>
            <ListItemText
              primary="Subject"
              secondary={subjectName || "None selected"}
            />
          </ListItem>
          <ListItem button divider>
            <ListItemText
              primary="Degree"
              secondary={degreeName || "None selected"}
            />
          </ListItem>
          <ListItem button divider>
            <ListItemText
              primary="Department"
              secondary={departmentName || "None selected"}
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Prerequisite"
              secondary={prerequisiteName || "None selected"}
            />
          </ListItem>
        </List>
      </Card>
    </div>
  );
}

//main export
export default CourseBody;
