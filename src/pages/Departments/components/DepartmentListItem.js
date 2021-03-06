//other
import React from "react";
import { withRouter } from "react-router-dom";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import DomainIcon from "@material-ui/icons/Domain";
import blue from "@material-ui/core/colors/blue";

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
function DepartmentListItem(props) {
  //destructure props
  const { history, department, hasDivider } = props;
  //material-ui styles hook
  const classes = useStyles();

  //main return
  return (
    <React.Fragment>
      <ListItem
        className={classes.listItem}
        button
        onClick={() => history.push(`/departments/${department.id}`)}
      >
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <DomainIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={department.name} />
      </ListItem>
      {hasDivider && (
        <Divider className={classes.divider} component="li" variant="inset" />
      )}
    </React.Fragment>
  );
}

//main export
export default withRouter(DepartmentListItem);
