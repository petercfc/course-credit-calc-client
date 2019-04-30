//other
import React from "react";
import { withRouter } from "react-router-dom";

//material-ui
import { makeStyles } from "@material-ui/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import PersonIcon from "@material-ui/icons/Person";
import blue from "@material-ui/core/colors/blue";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

//material-ui styles - custom hook
const useStyles = makeStyles(
  () => ({
    root: {},
    avatar: {
      backgroundColor: blue[100],
      color: blue[600]
    }
  }),
  { withTheme: true }
);

const handleClick = (history, id) => {
  history.push(`/students/:${id}`);
};

//main function
function StudentItem(props) {
  //use material-ui styles - custom hook
  const classes = useStyles();
  const { student, history } = props;
  //main return
  return (
    <div className={classes.root}>
      <ListItem button onClick={() => handleClick(history, student.id)}>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={student.name}
          secondary={
            student.enrolledDegree
              ? student.enrolledDegree.name
              : "No Enrolled Degree"
          }
        />
      </ListItem>
    </div>
  );
}

//main export - with router
export default withRouter(StudentItem);
