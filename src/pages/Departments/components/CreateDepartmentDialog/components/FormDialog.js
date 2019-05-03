//other
import React, { useState, useCallback } from "react";

//redux
import { useSelector, useDispatch } from "react-redux";
import { getModal } from "../../../../../redux/ducks/modal/selectors";
import { modalOperations } from "../../../../../redux/ducks/modal";

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
      borderTopLeftRadius: theme.spacing(1),
      borderTopRightRadius: theme.spacing(1)
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
  //use material-ui styles - custom hook
  const classes = useStyles();

  //redux hooks selectors
  const modal = useSelector(state => getModal(state, "createDepartment"));

  //redux hook actions
  const dispatch = useDispatch();
  const toggleModal = useCallback(
    () => dispatch(modalOperations.toggleModal("createDepartment")),
    []
  );

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
      onClose={toggleModal}
      onScroll={handleScroll}
    >
      {childWithProp}
    </Dialog>
  );
};

//main export
export default FormFields;
