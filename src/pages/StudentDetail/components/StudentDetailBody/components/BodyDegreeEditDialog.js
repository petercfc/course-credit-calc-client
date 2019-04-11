//other
import React, { useState, useRef } from "react";
import useStudentDetail from "../../../hooks/useStudentDetail";
import { withRouter } from "react-router-dom";

// apollo
import { Mutation, Query } from "react-apollo";
import { GET_STUDENT } from "../../../../../apollo/queries";
import { UPDATE_STUDENT } from "../../../../../apollo/mutations";
import { useMutation, useQuery } from "react-apollo-hooks";

//material-ui
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

//components
import Loading from "../../../../../components/Loading";
import Error from "../../../../../components/Error";

//main function
function BodyDegreeEditDialogForm(props) {
  //use material-ui styles custom hook
  const { history } = props;

  //use context state hook
  const { modals, toggleModal, student, closeMenu } = useStudentDetail();

  //nav to student
  const navToNewStudent = id => {
    history.push(`/students/:${id}`);
  };

  //create student mutation
  const updateStudent = useMutation(UPDATE_STUDENT, {
    variables: { data: { name: "wayo" }, where: { id: student.id } },
    update: (cache, { data: { createStudent } }) => {
      toggleModal("editDegree");
      navToNewStudent(student.id);
    }
  });

  //main return
  return (
    <Dialog
      open={modals.editDegree}
      onClose={() => {
        toggleModal("editDegree");
        closeMenu();
      }}
    >
      <DialogTitle>Change Degree</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
          sagittis libero, eu volutpat orci. Nulla facilisi.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            toggleModal("editDegree");
            closeMenu();
          }}
        >
          Cancel
        </Button>
        <Button type="submit" color="primary" autoFocus>
          Change
        </Button>
      </DialogActions>
    </Dialog>
  );
}

//main export - with router HOC
export default withRouter(BodyDegreeEditDialogForm);
