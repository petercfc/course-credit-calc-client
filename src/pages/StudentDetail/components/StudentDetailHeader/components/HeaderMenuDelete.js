//other
import React from "react";
import { withRouter } from "react-router-dom";

//material-ui
import { makeStyles } from "@material-ui/styles";
import MenuItem from "@material-ui/core/MenuItem";

// material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    menuItem: {}
  }),
  { withTheme: true }
);

//main function
function HeaderMenuDelete(props) {
  //destructure props
  const { history } = props;

  //use material-ui styles custom hook
  const classes = useStyles();

  //main return
  return (
    <MenuItem
      className={classes.menuItem}
      color="secondary"
      onClick={() => {
        history.push("/students");
      }}
    >
      Delete Student
    </MenuItem>
  );
}

//main export - with router HOC
export default withRouter(HeaderMenuDelete);
