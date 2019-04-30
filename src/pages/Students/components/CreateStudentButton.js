//other
import React from "react";

//redux
import { connect } from "react-redux";
import { modalOperations } from "../../../redux/ducks/modal";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    root: {
      position: "fixed",
      display: "flex",
      justifyContent: "center",
      width: "100%",
      zIndex: 1200
    },
    fab: {
      position: "fixed",
      bottom: 32
    },
    extendedIcon: {
      marginRight: theme.spacing(1)
    }
  }),
  { withTheme: true }
);

//main function
const CreateStudentButton = props => {
  //destructure props
  const { toggleModal } = props;
  //material-ui hook
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab
        className={classes.fab}
        size="large"
        variant="extended"
        aria-label="Create Student"
        onClick={() => toggleModal("createStudent")}
      >
        <AddIcon className={classes.extendedIcon} />
        Create Student
      </Fab>
    </div>
  );
};

const mapDispatchToProps = {
  toggleModal: modalOperations.toggleModal
};

//main export
export default connect(
  null,
  mapDispatchToProps
)(CreateStudentButton);
