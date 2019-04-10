//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";

// apollo

//components

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    root: {}
  }),
  { withTheme: true }
);

//main function
const Thing = props => {
  //destructure props
  const { things } = props;

  //material-ui hook
  const classes = useStyles();

  //main
  return <div className={classes.root}>Hello World</div>;
};

//main export
export default Thing;
