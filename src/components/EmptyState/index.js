//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

//create material-ui styles custom hook
const useStyles = makeStyles(
  theme => ({
    root: {
      padding: theme.spacing(4),
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
      <IconButton>{icon}</IconButton>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        {message}
      </Typography>
    </div>
  );
}

//main export
export default EmptyState;
