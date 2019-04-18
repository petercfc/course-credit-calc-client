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
import { makeGetModalState } from "../../redux/ducks/modal/selectors";
import { doToggleModal } from "../../redux/ducks/modal/reducers";

//components
import FormLogic from "./components/FormLogic";
import Loading from "../Loading/index";
import Error from "../Error/index";

//main function
const EditStudentName = props => {
  //destructure props
  const { student, modal } = props;

  //callback for when dialog closes
  const handleDialogClose = () => {
    // toggleModal(editStudentNameModal.modalType, {
    //   studentId: editStudentNameModal.modalProps.studentId
    // });
  };

  return (
    <Mutation mutation={UPDATE_STUDENT}>
      {(updateStudent, { loading, error }) => {
        return (
          <Dialog open={modal.isOpen} onClose={handleDialogClose}>
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
              studentId={modal.modalProps.studentId}
              handleDialogClose={handleDialogClose}
            />
          </Dialog>
        );
      }}
    </Mutation>
  );
};

const makeMapStateToProps = () => {
  const getModalState = makeGetModalState();
  return (state, props) => getModalState(state, props);
};

//init toggleModal in props
const mapDispatchToProps = dispatch => ({
  toggleModal: (modalType, modalProps) =>
    dispatch(doToggleModal(modalType, modalProps))
});

//main export
export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(EditStudentName);
