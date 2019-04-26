//other
import React from "react";

//redux
import { compose } from "redux";
import { connect } from "react-redux";
import { makeGetAlertState } from "../../redux/ducks/alert/selectors";
import { alertOperations } from "../../redux/ducks/alert";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

//create material-ui styles custom hook
const useStyles = makeStyles(
  theme => ({
    root: {},
    snackBar: {},
    snackBarContent: {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.spacing(2),
      margin: theme.spacing(2),
      paddingTop: 0,
      paddingBottom: 0
    }
  }),
  { withTheme: true }
);

//Header function
function Alert(props) {
  //destructure props
  const { alert, setAlert } = props;
  //material-ui styles custom hook
  const classes = useStyles();

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setAlert(false, "");
  }

  //Header return
  return (
    <div className={classes.root}>
      <Snackbar
        className={classes.snackBar}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={alert.isOpen}
        autoHideDuration={1600}
        onClose={handleClose}
      >
        <SnackbarContent
          className={classes.snackBarContent}
          message={<span id="message-id">{alert.message}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </Snackbar>
    </div>
  );
}

const makeMapStateToProps = () => {
  const getAlertState = makeGetAlertState();
  return (state, props) => getAlertState(state, props);
};

const mapDispatchToProps = {
  setAlert: alertOperations.setAlert
};

//compose hocs
const enhance = compose(
  connect(
    makeMapStateToProps,
    mapDispatchToProps
  )
);
//main export
export default enhance(Alert);
