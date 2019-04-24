//other
import React, { useState, useEffect, useCallback } from "react";
import { withRouter } from "react-router-dom";

//material-ui
import { makeStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from "@material-ui/icons/People";
import SchoolIcon from "@material-ui/icons/School";
import DomainIcon from "@material-ui/icons/Domain";
import StorageIcon from "@material-ui/icons/Storage";
import ListAltIcon from "@material-ui/icons/ListAlt";
import Divider from "@material-ui/core/Divider";

//create a custom material-ui hook to access class styles
const useStyles = makeStyles(
  theme => ({
    root: {},
    drawerPaper: {
      borderTopLeftRadius: theme.spacing(2),
      borderTopRightRadius: theme.spacing(2)
    },
    list: {
      width: 250
    },
    fullList: {
      width: "auto"
    },
    listItem: {
      // paddingLeft: 0,
      // paddingRight: 0
    },
    divider: {
      marginLeft: 64,
      marginRight: 16,
      borderBottom: `0.0625em solid rgba(0, 0, 0, 0.08);`,
      backgroundClip: "padding-box",
      backgroundColor: "transparent"
    },
    contentHeader: {
      paddingBottom: 0
    }
  }),
  { withTheme: true }
);

//Footer function
function BottomDrawer(props) {
  //destructure props
  const { history } = props;

  //custom hook to bring in styles
  const classes = useStyles();

  // useState hook
  const [state, setState] = React.useState({
    bottom: false
  });

  const toggleDrawer = (side, open) => () => {
    setState({ ...state, [side]: open });
  };

  const fullList = (
    <div className={classes.fullList}>
      <CardContent className={classes.contentHeader}>
        <Typography variant="h6" gutterBottom>
          Navigation
        </Typography>
      </CardContent>
      <List>
        <ListItem
          className={classes.listItem}
          button
          onClick={() => {
            history.push(`/students`);
          }}
        >
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Students" />
        </ListItem>
        <Divider className={classes.divider} component="li" variant="inset" />
        <ListItem
          className={classes.listItem}
          button
          onClick={() => {
            history.push(`/courses`);
          }}
        >
          <ListItemIcon>
            <ListAltIcon />
          </ListItemIcon>
          <ListItemText primary="Courses" />
        </ListItem>
        <Divider className={classes.divider} component="li" variant="inset" />
        <ListItem
          className={classes.listItem}
          button
          onClick={() => {
            history.push(`/degrees`);
          }}
        >
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Degrees" />
        </ListItem>
        <Divider className={classes.divider} component="li" variant="inset" />
        <ListItem
          className={classes.listItem}
          button
          onClick={() => {
            history.push(`/departments`);
          }}
        >
          <ListItemIcon>
            <DomainIcon />
          </ListItemIcon>
          <ListItemText primary="Departments" />
        </ListItem>
        <Divider className={classes.divider} component="li" variant="inset" />
        <ListItem
          className={classes.listItem}
          button
          onClick={() => {
            history.push(`/subjects`);
          }}
        >
          <ListItemIcon>
            <StorageIcon />
          </ListItemIcon>
          <ListItemText primary="Subjects" />
        </ListItem>
      </List>
    </div>
  );

  //Footer return
  return (
    <div className={classes.root}>
      <IconButton
        aria-label="Open drawer"
        onClick={toggleDrawer("bottom", true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        PaperProps={{ classes: { root: classes.drawerPaper } }}
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer("bottom", false)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer("bottom", false)}
          onKeyDown={toggleDrawer("bottom", false)}
        >
          {fullList}
        </div>
      </Drawer>
    </div>
  );
}

//Footer export - with router HOC
export default withRouter(BottomDrawer);
