//other
import React from "react";
import { withRouter } from "react-router-dom";
import t from "typy"; // ES6 style import

//material-ui
import { makeStyles } from "@material-ui/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import PersonIcon from "@material-ui/icons/Person";
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
    divider: {
      marginLeft: 72,
      marginRight: 16,
      borderBottom: `0.0625em solid rgba(0, 0, 0, 0.08);`,
      backgroundClip: "padding-box",
      backgroundColor: "transparent"
    }
  }),
  { withTheme: true }
);

//main function
function StudentListItem(props) {
  //destructure props
  const { history, student, hasDivider } = props;
  //material-ui styles hook
  const classes = useStyles();

  //main return
  return (
    <React.Fragment>
      <ListItem
        className={classes.listItem}
        button
        onClick={() => history.push(`/students/${student.id}`)}
      >
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={student.name}
          secondary={
            t(student, "enrolledDegree.name").safeString || "No enrolled degree"
          }
        />
      </ListItem>
      {hasDivider && (
        <Divider className={classes.divider} component="li" variant="inset" />
      )}
    </React.Fragment>
  );
}

//main export
export default withRouter(StudentListItem);
