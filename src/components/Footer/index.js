//other
import React, { useState, useEffect, useCallback } from "react";
import { withRouter } from "react-router-dom";

//material-ui
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PeopleIcon from "@material-ui/icons/People";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

//create a custom material-ui hook to access class styles
const useStyles = makeStyles(
  theme => ({
    root: {},
    subHeader: {
      backgroundColor: theme.palette.background.paper
    },
    appBar: {
      top: "auto",
      bottom: 0,
      backgroundColor: theme.palette.background.paper,
      borderTopLeftRadius: theme.spacing(2),
      borderTopRightRadius: theme.spacing(2),
      position: "fixed"
    },
    toolbar: {
      alignItems: "center",
      justifyContent: "space-between"
    },
    bottomNavigation: {
      width: "100%",
      position: "fixed",
      bottom: 0,
      left: 0,
      borderTopLeftRadius: theme.spacing(2),
      borderTopRightRadius: theme.spacing(2),
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    },
    bottomNavigationActionLeft: { left: 0 },
    bottomNavigationActionRight: {},
    bucket: {
      background:
        "linear-gradient(135deg, transparent 10px, #c00 0) top left,\n\t\tlinear-gradient(225deg, transparent 10px, #c00 0) top right,\n\t\tlinear-gradient(315deg\n\n\t\tradial-gradient(circle at 0 0, rgba(204,0,0,0) 14px, #c00 15px),\n\n\t\tradial-gradient(circle at 100% 0, rgba(204,0,0,0) 14px, #c00 15px),\n\n\t\t\tbackground-size: 50% 50%",
      backgroundRepeat: "no-repeat"
    }
  }),
  { withTheme: true }
);

//Footer function
function Footer(props) {
  //custom hook to bring in styles
  const classes = useStyles();

  // custom hook to bring in theme
  //   const theme = useTheme();

  // useState hook for currentTab
  const [currentTab, setCurrentTab] = useState("/calculator");

  //when props change set tab based on router location - skip if currentTab hasnt changed
  useEffect(() => {
    const { location } = props;
    switch (location.pathname) {
      case "/students":
        setCurrentTab("/students");
        break;
      case "/courses":
        setCurrentTab("/courses");
        break;
      default:
        setCurrentTab("/students");
        break;
    }
  }, [currentTab]);

  //when BottomNavigation changes set currentTab to the value - then update the router URL
  const handleChange = useCallback((e, value) => {
    setCurrentTab(value);
    updateURL(value);
  }, []);

  //update the router url based on the currentTab
  const updateURL = tab => {
    const { history } = props;
    switch (tab) {
      case "/students":
        history.push("/students");
        break;
      case "/courses":
        history.push("/courses");
        break;
      default:
        break;
    }
  };
  // paper component with elevation
  const paperComponent = props => (
    <Paper elevation={props.elevation} {...props} />
  );

  //Footer return
  return (
    <div className={classes.root}>
      {/* <BottomNavigation
        className={classes.bottomNavigation}
        component={paperComponent}
        elevation={5}
        showLabels
        value={currentTab}
        onChange={handleChange}
      >
        <BottomNavigationAction
          className={classes.bottomNavigationActionLeft}
          value="/students"
          label="Students"
          icon={<PeopleIcon />}
        />
        <BottomNavigationAction
          className={classes.bottomNavigationActionLeft}
          value="/courses"
          label="Search"
          icon={<FormatListBulletedIcon />}
        />
        />
      </BottomNavigation> */}
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
          <div>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

//Footer export - with router HOC
export default withRouter(Footer);
