//other
import React, { useState } from "react";

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

  //state hook for input labels
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = e => {
    let element = e.target;
    if (element.scrollTop != 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const childWithProp = React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      isScrolled: isScrolled
    });
  });

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
      onScroll={handleScroll}
    >
      {childWithProp}
    </Dialog>
  );
};

//main export
export default FormFields;
