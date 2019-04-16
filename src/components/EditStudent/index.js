//other
import React from "react";

//material-ui
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

//redux
import { connect } from "react-redux";
import { doToggleModal } from "../../redux/actions/modal";
import { makeGetModal } from "../../redux/selectors/modal";

// apollo

//components
import FormLogic from "./components/FormLogic";

//main function
const EditStudent = props => {
  //destructure props
  const { editStudentNameModal, toggleModal } = props;

  //callback for when dialog closes
  const handleDialogClose = () => {
    toggleModal(editStudentNameModal.modalType, {
      studentId: editStudentNameModal.modalProps.studentId
    });
  };

  //main
  return (
    <Dialog open={editStudentNameModal.isOpen} onClose={handleDialogClose}>
      <DialogTitle>EditStudent</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mauris
          dapibus, fermentum mi nec, laoreet magna. Mauris turpis sapien,
          gravida quis est vel, mattis posuere dui.
        </DialogContentText>
      </DialogContent>
      <FormLogic handleDialogClose={handleDialogClose} />
    </Dialog>
  );
};

//init editStudentNameModal in props
const mapStateToProps = () => {
  //get reselect function
  const getModal = makeGetModal();
  //pass state and component props to the call to the selector
  return (state, modalType) => {
    //recieve editNameModal from selector
    return { editStudentNameModal: getModal(state, modalType) };
  };
};

//init toggleModal in props
const mapDispatchToProps = dispatch => ({
  toggleModal: (modalType, modalProps) =>
    dispatch(doToggleModal(modalType, modalProps))
});

//main export
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditStudent);
