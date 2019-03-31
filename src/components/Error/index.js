//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

//create material-ui styles custom hook
const useStyles = makeStyles(
  () => ({
    root: {}
  }),
  { withTheme: true }
);

//Header function
function Error(props) {
  //material-ui styles custom hook
  const classes = useStyles();
  const { message } = props;
  //Header return
  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom>
        Error - {message}
      </Typography>
    </div>
  );
}

//Header export
export default Error;
