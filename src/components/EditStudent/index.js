//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

//redux
import { connect } from "react-redux";
import { doToggleModal } from "../../redux/actions/modal";
import { makeGetModal } from "../../redux/selectors/modal";

// apollo

//components

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    root: {}
  }),
  { withTheme: true }
);

//main function
const EditStudent = props => {
  //destructure props
  const { editStudentNameModal, toggleModal } = props;

  //material-ui hook
  const classes = useStyles();

  const handleClose = () => {
    toggleModal("editStudentName", {
      studentId: "cjubc4sjmgkek0b03qztplk4p"
    });
  };

  //main
  return (
    <Dialog open={editStudentNameModal.isOpen} onClose={handleClose}>
      <DialogTitle>EditStudent</DialogTitle>
    </Dialog>
  );
};

const mapStateToProps = () => {
  //get reselect function
  const getModal = makeGetModal();
  //pass state and component props to the call to the selector
  return (state, ownProps) => {
    //recieve editNameModal from selector
    return { editStudentNameModal: getModal(state, ownProps) };
  };
};

const mapDispatchToProps = dispatch => ({
  toggleModal: (modalType, modalProps) =>
    dispatch(doToggleModal(modalType, modalProps))
});

//main export
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditStudent);
