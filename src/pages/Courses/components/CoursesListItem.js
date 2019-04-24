//other
import React from "react";
import { withRouter } from "react-router-dom";
import t from "typy"; // ES6 style import

//material-ui
import { makeStyles } from "@material-ui/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListAltIcon from "@material-ui/icons/ListAlt";
import blue from "@material-ui/core/colors/blue";
import Avatar from "@material-ui/core/Avatar";

//material-ui styles hook
const useStyles = makeStyles(
  theme => ({
    avatar: {
      backgroundColor: blue[100],
      color: blue[600]
    }
  }),
  { withTheme: true }
);

//main function
function Courses(props) {
  //destructure props
  const { history, course } = props;

  //material-ui styles hook
  const classes = useStyles();

  //check for null check for prerequsiite name
  const prerequisite = t(course, "prerequisite.name").safeString;

  //main return
  return (
    <ListItem button onClick={() => history.push(`/courses/${course.id}`)}>
      {console.log(course)}
      <ListItemAvatar>
        <Avatar className={classes.avatar}>
          <ListAltIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={course.name} secondary={course.number} />
    </ListItem>
  );
}

//main export
export default withRouter(Courses);
