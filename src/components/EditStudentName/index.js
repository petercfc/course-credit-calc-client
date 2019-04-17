//other
import React from "react";

//apollo
import { Mutation } from "react-apollo";

import { UPDATE_STUDENT } from "../../apollo/mutations";

//material-ui
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

//redux
import { connect } from "react-redux";
import { doToggleModal } from "../../redux/actions/modal";
import { makeGetModal } from "../../redux/selectors/modal";

//components
import FormLogic from "./components/FormLogic";
import Loading from "../Loading/index";
import Error from "../Error/index";

//main function
const EditStudentName = props => {
  //destructure props
  const { student, editStudentNameModal, toggleModal } = props;

  //callback for when dialog closes
  const handleDialogClose = () => {
    toggleModal(editStudentNameModal.modalType, {
      studentId: editStudentNameModal.modalProps.studentId
    });
  };

  return (
    <Mutation mutation={UPDATE_STUDENT}>
      {(updateStudent, { loading, error }) => {
        return (
          <Dialog
            open={editStudentNameModal.isOpen}
            onClose={handleDialogClose}
          >
            {loading && <Loading />}

            <DialogTitle>EditStudent</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                mauris dapibus, fermentum mi nec, laoreet magna. Mauris turpis
                sapien, gravida quis est vel, mattis posuere dui.
              </DialogContentText>
              <br />
              {error && <Error message={error.message} />}
            </DialogContent>
            <FormLogic
              updateStudent={updateStudent}
              student={student}
              studentId={editStudentNameModal.modalProps.studentId}
              handleDialogClose={handleDialogClose}
            />
          </Dialog>
        );
      }}
    </Mutation>
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
)(EditStudentName);
