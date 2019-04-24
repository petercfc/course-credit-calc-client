//other
import React from "react";
import { withRouter } from "react-router-dom";

//material-ui
import { makeStyles } from "@material-ui/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListAltIcon from "@material-ui/icons/ListAlt";
import Divider from "@material-ui/core/Divider";
import blue from "@material-ui/core/colors/blue";
import Avatar from "@material-ui/core/Avatar";

//material-ui styles hook
const useStyles = makeStyles(
  theme => ({
    avatar: {
      backgroundColor: blue[100],
      color: blue[600]
    },
    listItem: {
      paddingLeft: 0,
      paddingRight: 0
    },
    divider: {
      marginLeft: 56
    }
  }),
  { withTheme: true }
);

//main function
function Courses(props) {
  //destructure props
  const { history, course, isLast } = props;
  //material-ui styles hook
  const classes = useStyles();

  //main return
  return (
    <React.Fragment>
      <ListItem
        className={classes.listItem}
        button
        onClick={() => history.push(`/courses/${course.id}`)}
      >
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <ListAltIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={course.name} secondary={course.number} />
      </ListItem>
      {!isLast && <Divider className={classes.divider} variant="inset" />}
    </React.Fragment>
  );
}

//main export
export default withRouter(Courses);
