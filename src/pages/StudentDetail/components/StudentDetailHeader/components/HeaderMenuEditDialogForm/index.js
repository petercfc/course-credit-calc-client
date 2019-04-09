//other
import React, { useState, useRef } from "react";
import useStudentDetail from "../../../../hooks/useStudentDetail";
import { withRouter } from "react-router-dom";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

// apollo
import { Mutation, Query } from "react-apollo";
import { GET_STUDENT } from "../../../../../../apollo/queries";
import { UPDATE_STUDENT } from "../../../../../../apollo/mutations";

//material-ui
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

//components
import Loading from "../../../../../../components/Loading";
import Error from "../../../../../../components/Error";

//main function
function HeaderMenuEditDialogForm(props) {
  //use material-ui styles custom hook
  const { history, open, toggleModal } = props;

  //use context state hook
  const { student, closeMenu } = useStudentDetail();

  const [name, setName] = useState(student.name);
  const focusRef = useRef();
  const studentId = student.id;
  const handleChangeName = () => event => {
    let value = event.target.value;
    setName(value);
  };

  const handleCloseMenu = () => {};

  const navToNewStudent = id => {
    history.push(`/students/:${id}`);
  };

  //main return
  return (
    <Mutation
      mutation={UPDATE_STUDENT}
      variables={{ data: { name: name }, where: { id: student.id } }}
      update={(cache, { data: { createStudent } }) => {
        toggleModal();
        navToNewStudent(student.id);
      }}
    >
      {(createStudent, { loading, error }) => (
        <Query
          query={GET_STUDENT}
          variables={{ id: studentId }}
          onCompleted={data => {}}
        >
          {({ data: { student } }) => (
            <Dialog
              open={open}
              onClose={() => {
                toggleModal();
                closeMenu();
              }}
              onEnter={() => {
                focusRef.current.focus();
              }}
            >
              {loading && <Loading />}
              <ValidatorForm
                ref="form"
                onSubmit={() => {
                  createStudent();
                  closeMenu();
                }}
                onError={errors => console.log(errors)}
              >
                <DialogTitle>Change Name</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam vel sagittis libero, eu volutpat orci. Nulla facilisi.
                  </DialogContentText>
                  {error && <Error message={error.message} />}
                  <TextValidator
                    inputRef={focusRef}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    label="Name"
                    onChange={handleChangeName()}
                    name="Name"
                    value={name}
                    validators={["required"]}
                    errorMessages={["This field is required."]}
                  />
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={() => {
                      toggleModal();
                      closeMenu();
                    }}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" color="primary" autoFocus>
                    Change
                  </Button>
                </DialogActions>
              </ValidatorForm>
            </Dialog>
          )}
        </Query>
      )}
    </Mutation>
  );
}

//main export - with router HOC
export default withRouter(HeaderMenuEditDialogForm);
