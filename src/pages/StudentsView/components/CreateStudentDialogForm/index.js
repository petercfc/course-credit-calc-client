//other
import React, { useState, useRef } from "react";
import { withRouter } from "react-router-dom";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

// apollo
import { Mutation } from "react-apollo";
import { GET_ALL_STUDENTS } from "../../../../apollo/queries";
import { CREATE_STUDENT } from "../../../../apollo/mutations";

//material-ui
// import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

//components
import Loading from "../../../../components/Loading";
import Error from "../../../../components/Error";

//material-ui styles - custom hook
// const useStyles = makeStyles(
//   theme => ({
//     root: {}
//   }),
//   { withTheme: true }
// );

//main function
function CreateStudentDialogForm(props) {
  //use material-ui styles custom hook
  // const classes = useStyles();

  const [name, setName] = useState("");
  const { history, modal, toggleModal } = props;

  const focusRef = useRef();

  const handleChangeName = () => event => {
    let value = event.target.value;
    setName(value);
  };

  const navToNewStudent = id => {
    history.push(`/students/:${id}`);
  };

  //main return
  return (
    <Mutation
      mutation={CREATE_STUDENT}
      variables={{ data: { name: name } }}
      update={(cache, { data: { createStudent } }) => {
        const { students } = cache.readQuery({ query: GET_ALL_STUDENTS });
        cache.writeQuery({
          query: GET_ALL_STUDENTS,
          data: { students: students.concat([createStudent]) }
        });
        toggleModal();
        navToNewStudent(createStudent.id);
      }}
    >
      {(createStudent, { loading, error }) => (
        <Dialog
          open={modal.isOpen}
          onClose={toggleModal}
          onEnter={() => {
            focusRef.current.focus();
          }}
        >
          <ValidatorForm
            ref="form"
            onSubmit={() => {
              createStudent();
            }}
            onError={errors => console.log(errors)}
          >
            {loading && <Loading />}
            <DialogTitle>Create Student</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                vel sagittis libero, eu volutpat orci. Nulla facilisi.
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
              <Button onClick={toggleModal}>Cancel</Button>
              <Button type="submit" color="primary" autoFocus>
                Create
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      )}
    </Mutation>
  );
}

//main export - with router HOC
export default withRouter(CreateStudentDialogForm);
