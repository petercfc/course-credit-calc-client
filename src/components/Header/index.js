//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

//create material-ui styles custom hook
const useStyles = makeStyles(
  theme => ({
    root: {
      flexGrow: 1
    },
    appBar: {
      backgroundColor: theme.palette.background.paper,
      borderBottomLeftRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
      position: "fixed",
      top: 0
    }
  }),
  { withTheme: true }
);

//Header function
function Header(props) {
  //material-ui styles custom hook
  const classes = useStyles();
  const { children } = props;

  //Header return
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} color="default" position="static">
        <Toolbar>{children}</Toolbar>
      </AppBar>
    </div>
  );
}

//Header export - with router HOC
export default Header;
