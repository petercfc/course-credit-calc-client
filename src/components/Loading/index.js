//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";

//create material-ui styles custom hook
const useStyles = makeStyles(
  theme => ({
    linear: {
      flexGrow: 1
    },
    circular: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh"
    }
  }),
  { withTheme: true }
);

//main function
function Loading(props) {
  //material-ui styles custom hook
  const { isCircular } = props;
  const classes = useStyles();
  if (isCircular) {
    return (
      <div className={classes.circular}>
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className={classes.linear}>
      <LinearProgress />
    </div>
  );
}

//main export
export default Loading;
