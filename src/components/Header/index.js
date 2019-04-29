//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

//components
import HeaderBack from "./components/HeaderBack";
import HeaderTitle from "./components/HeaderTitle";

//create material-ui styles custom hook
const useStyles = makeStyles(
  theme => ({
    root: {
      flexGrow: 1
    },
    appBar: {
      backgroundColor: theme.palette.background.paper,
      borderBottomLeftRadius: theme.spacing(1),
      borderBottomRightRadius: theme.spacing(1),
      position: "fixed",
      top: 0
    },
    toolBar: {
      paddingTop: 4,
      paddingBottom: 4
    }
  }),
  { withTheme: true }
);

//Header function
function Header(props) {
  //material-ui styles custom hook
  const classes = useStyles();
  const { children, backUrl, title, subTitle } = props;

  //Header return
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} color="default" position="static">
        <Toolbar className={classes.toolBar} disableGutters>
          <HeaderBack backUrl={backUrl} />
          <HeaderTitle title={title} subTitle={subTitle} />
          {children}
        </Toolbar>
      </AppBar>
    </div>
  );
}

//Header export - with router HOC
export default Header;
