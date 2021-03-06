//other
import React from "react";
import { withRouter } from "react-router-dom";

//material-ui
import { makeStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackButton from "@material-ui/icons/ArrowBack";

//create material-ui styles custom hook
const useStyles = makeStyles(
  theme => ({
    root: {},
    backButton: {
      marginLeft: -12,
      marginRight: 20
    }
  }),
  { withTheme: true }
);

const handleClick = history => {
  history.goBack();
};

//main function
function BackButton(props) {
  //material-ui styles custom hook
  const classes = useStyles();
  const { history } = props;

  //main return
  return (
    <IconButton
      className={classes.backButton}
      onClick={() => handleClick(history)}
    >
      <ArrowBackButton />
    </IconButton>
  );
}

//main export - with router HOC
export default withRouter(BackButton);
