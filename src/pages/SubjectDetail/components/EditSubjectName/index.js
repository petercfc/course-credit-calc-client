//other
import React, { useCallback } from "react";

//apollo
import { Mutation } from "react-apollo";
import { UPDATE_SUBJECT } from "apollo/mutations";

//material-ui
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

//redux
import { useSelector, useDispatch } from "react-redux";
import { getModal } from "redux/ducks/modal/selectors";
import { modalOperations } from "redux/ducks/modal";

//components
import FormLogic from "./components/FormLogic";
import Loading from "components/Loading/index";
import Error from "components/Error/index";

//main function
const EditSubjectName = props => {
  //destructure props
  const { subject } = props;

  //redux hooks selectors
  const modal = useSelector(state => getModal(state, "editSubjectName"));

  //redux hook actions
  const dispatch = useDispatch();
  const toggleModal = useCallback(
    () => dispatch(modalOperations.toggleModal("editSubjectName")),
    []
  );

  //callback for when dialog closes
  const handleDialogClose = () => {
    toggleModal();
  };

  return (
    <Mutation mutation={UPDATE_SUBJECT}>
      {(updateSubject, { loading, error }) => {
        return (
          <Dialog open={modal.isOpen} onClose={handleDialogClose}>
            {loading && <Loading />}

            <DialogTitle>Edit Subject Name</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                mauris dapibus, fermentum mi nec, laoreet magna. Mauris turpis
                sapien, gravida quis est vel, mattis posuere dui.
              </DialogContentText>
              {error && <Error message={error.message} />}
            </DialogContent>
            <FormLogic
              updateSubject={updateSubject}
              subject={subject}
              subjectId={modal.modalProps.subjectId}
              handleDialogClose={handleDialogClose}
            />
          </Dialog>
        );
      }}
    </Mutation>
  );
};

//main export
export default EditSubjectName;