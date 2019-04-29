//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    dialog: {
      paddingTop: theme.spacing(3),
      maxHeight: "-webkit-fill-available"
    },
    content: { paddingTop: 64, paddingLeft: 16, paddingRight: 16 },
    paperFullScreen: {
      borderTopLeftRadius: theme.spacing(2),
      borderTopRightRadius: theme.spacing(2)
    }
  }),
  { withTheme: true }
);

//transition component
function Transition(props) {
  return <Slide direction="up" {...props} />;
}

//main function
const FormFields = props => {
  //destructure props
  const { handleDialogClose, modal, children } = props;

  //use material-ui styles - custom hook
  const classes = useStyles();

  //main
  return (
    <Dialog
      className={classes.dialog}
      classes={{
        paperFullScreen: classes.paperFullScreen
      }}
      fullScreen
      scroll="paper"
      TransitionComponent={Transition}
      open={modal.isOpen}
      onClose={handleDialogClose}
    >
      {children}
    </Dialog>
  );
};

//main export
export default FormFields;
