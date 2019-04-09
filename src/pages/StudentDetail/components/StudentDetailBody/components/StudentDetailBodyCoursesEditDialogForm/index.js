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
import StudentDetailBodyCoursesEditDialogSelect from "../StudentDetailBodyCoursesEditDialogSelect";

//main function
function StudentDetailBodyCoursesEditDialogForm(props) {
  //use material-ui styles custom hook
  const { open, toggleModal } = props;
  const [degreeId, setDegreeId] = useState(student.degree);
  const studentId = student.id;

  const handleChangeCourses = degree => {
    setDegreeId(degree);
  };

  //destructure hook
  const { student } = useStudentDetail();

  //main return
  return (
    <React.Fragment>
      {student.degree && (
        <Mutation
          mutation={UPDATE_STUDENT}
          variables={{
            data: { enrolledDegree: { connect: { id: degreeId } } },
            where: { id: student.id }
          }}
          update={() => {
            toggleModal();
          }}
        >
          {(updateStudent, { loading, error }) => (
            <Query
              query={GET_STUDENT}
              variables={{ id: studentId }}
              onCompleted={data => {}}
            >
              {({ data: { student } }) => (
                <Dialog
                  // fullScreen
                  open={open}
                  onClose={() => {
                    toggleModal();
                  }}
                >
                  {loading && <Loading />}
                  <DialogTitle>Change Courses</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Select courses you have succesfully passed.
                    </DialogContentText>
                    {error && <Error message={error.message} />}
                  </DialogContent>
                  <StudentDetailBodyCoursesEditDialogSelect
                    student={student}
                    handleChangeCourses={handleChangeCourses}
                  />
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
                </Dialog>
              )}
            </Query>
          )}
        </Mutation>
      )}
    </React.Fragment>
  );
}

//main export - with router HOC
export default withRouter(StudentDetailBodyCoursesEditDialogForm);
