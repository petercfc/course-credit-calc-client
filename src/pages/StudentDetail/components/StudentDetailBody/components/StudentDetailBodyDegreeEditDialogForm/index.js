//other
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { ValidatorForm } from "react-material-ui-form-validator";
import useStudentDetail from "../../../../hooks/useStudentDetail";

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
import StudentDetailBodyDegreeEditDialogSelect from "../StudentDetailBodyDegreeEditDialogSelect";

//main function
function DialogForm(props) {
  //use material-ui styles custom hook
  const { open, toggleModal } = props;
  const { student } = useStudentDetail();
  console.log("what is student");
  console.log(student);

  const handleChangeDegree = degree => {
    // setDegreeId(degree);
    console.log("set degree");
  };

  //main return
  return (
    <Mutation
      mutation={UPDATE_STUDENT}
      variables={{
        data: { enrolledDegree: { connect: { id: student.degree.id } } },
        where: { id: student.id }
      }}
      update={() => {
        toggleModal();
      }}
    >
      {(updateStudent, { loading, error }) => (
        <Query
          query={GET_STUDENT}
          variables={{ id: student.id }}
          onCompleted={data => {}}
        >
          {({ data: { student } }) => (
            <Dialog
              open={open}
              onClose={() => {
                toggleModal();
              }}
            >
              {loading && <Loading />}
              <ValidatorForm
                ref="form"
                onSubmit={() => {
                  if (student.degree.id) {
                    updateStudent();
                  } else {
                    toggleModal();
                  }
                }}
                onError={errors => console.log(errors)}
              >
                <DialogTitle>Change Degree</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam vel sagittis libero, eu volutpat orci. Nulla facilisi.
                  </DialogContentText>
                  {error && <Error message={error.message} />}
                  <StudentDetailBodyDegreeEditDialogSelect
                    student={student}
                    handleChangeDegree={handleChangeDegree}
                  />
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={() => {
                      toggleModal();
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
export default withRouter(DialogForm);
