//other
import React from "react";
import { withRouter } from "react-router-dom";

//apollo
import { Mutation } from "react-apollo";
import { GET_ALL_STUDENTS } from "../../apollo/queries";
import { CREATE_STUDENT } from "../../apollo/mutations";

//material-ui
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

//redux
import { compose } from "redux";
import { connect } from "react-redux";
import { makeGetModalState } from "../../redux/ducks/modal/selectors";
import { modalOperations } from "../../redux/ducks/modal";

//components
import FormLogic from "./components/FormLogic";
import Loading from "../Loading/index";
import Error from "../Error/index";

//main function
const CreateStudentDialog = props => {
  //destructure props
  const { history, modal, toggleModal } = props;

  //callback for when dialog closes
  const handleDialogClose = () => {
    toggleModal("createStudent");
  };

  return (
    <Mutation
      mutation={CREATE_STUDENT}
      update={(cache, { data: { createStudent } }) => {
        const { students } = cache.readQuery({ query: GET_ALL_STUDENTS });
        cache.writeQuery({
          query: GET_ALL_STUDENTS,
          data: { students: students.concat([createStudent]) }
        });
        history.push(`/students/:${createStudent.id}`);
      }}
    >
      {(createStudent, { loading, error }) => {
        return (
          <Dialog open={modal.isOpen} onClose={handleDialogClose}>
            {loading && <Loading />}

            <DialogTitle>Create Student</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                mauris dapibus, fermentum mi nec, laoreet magna. Mauris turpis
                sapien, gravida quis est vel, mattis posuere dui.
              </DialogContentText>
              {error && <Error message={error.message} />}
            </DialogContent>
            <FormLogic
              createStudent={createStudent}
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

const mapDispatchToProps = {
  toggleModal: modalOperations.toggleModal
};

//compose hocs
const enhance = compose(
  withRouter,
  connect(
    makeMapStateToProps,
    mapDispatchToProps
  )
);
//main export
export default enhance(CreateStudentDialog);
