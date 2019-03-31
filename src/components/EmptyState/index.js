//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

//create material-ui styles custom hook
const useStyles = makeStyles(
  theme => ({
    root: {
      padding: theme.spacing(8),
      textAlign: "center"
    }
  }),
  { withTheme: true }
);

//main function
function EmptyState(props) {
  //material-ui styles custom hook
  const classes = useStyles();
  const { message, icon } = props;
  //main return
  return (
    <div className={classes.root}>
      <Typography variant="body1" gutterBottom>
        {message}
      </Typography>
      {icon}
    </div>
  );
}

//main export
export default EmptyState;
