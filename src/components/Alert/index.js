//other
import React from "react";

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
      marginBottom: theme.spacing(12)
    }
  }),
  { withTheme: true }
);

//Header function
function Alert(props) {
  //material-ui styles custom hook
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(true);
  }

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }

  //Header return
  return (
    <div className={classes.root}>
      <Button onClick={handleClick}>Open simple snackbar</Button>
      <Snackbar
        className={classes.snackBar}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        open={open}
        autoHideDuration={1200}
        onClose={handleClose}
      >
        <SnackbarContent
          className={classes.snackBarContent}
          message={<span id="message-id">Student Deleted</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        >
          asd
        </SnackbarContent>
      </Snackbar>
    </div>
  );
}

//Header export - with router HOC
export default Alert;
