//other
import React, { useState, useEffect, useCallback } from "react";
import { withRouter } from "react-router-dom";

//material-ui
import { makeStyles } from "@material-ui/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PeopleIcon from "@material-ui/icons/People";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import Paper from "@material-ui/core/Paper";

//create a custom material-ui hook to access class styles
const useStyles = makeStyles(
  theme => ({
    root: {},
    bottomNavigation: {
      width: "100%",
      position: "fixed",
      bottom: 0,
      borderTopLeftRadius: theme.spacing(2),
      borderTopRightRadius: theme.spacing(2),
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
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
      <BottomNavigation
        className={classes.bottomNavigation}
        component={paperComponent}
        elevation={5}
        showLabels
        value={currentTab}
        onChange={handleChange}
      >
        <BottomNavigationAction
          value="/students"
          label="Students"
          icon={<PeopleIcon />}
        />
        <BottomNavigationAction
          value="/courses"
          label="Courses"
          icon={<FormatListBulletedIcon />}
        />
      </BottomNavigation>
    </div>
  );
}

//Footer export - with router HOC
export default withRouter(Footer);
