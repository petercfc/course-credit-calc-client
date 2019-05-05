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
    backButton: {
      marginRight: 4
    }
  }),
  { withTheme: true }
);

//main function
function HeaderMenuBack(props) {
  //material-ui styles custom hook
  const classes = useStyles();
  const { history, backUrl } = props;

  const handleBack = () => {
    if (backUrl) {
      history.push(backUrl);
    } else history.goBack();
  };

  //main return
  return (
    <IconButton className={classes.backButton} onClick={handleBack}>
      <ArrowBackButton />
    </IconButton>
  );
}

//main export - with router HOC
export default withRouter(HeaderMenuBack);
