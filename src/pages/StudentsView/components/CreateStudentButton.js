//other
import React from "react";

//redux
import { connect } from "react-redux";
import { modalOperations } from "../../../redux/ducks/modal";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

//components
import CreateStudentDialog from "../../../components/CreateStudentDialog";

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    root: {},
    actions: {
      justifyContent: "flex-end"
    }
  }),
  { withTheme: true }
);

//main function
const CreateStudentButton = props => {
  //destructure props
  const { student, toggleModal } = props;
  //material-ui hook
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button onClick={() => toggleModal("createStudent")}>
        Create Student
      </Button>
      <CreateStudentDialog modalType="createStudent" />
    </div>
  );
};

const mapDispatchToProps = {
  toggleModal: modalOperations.toggleModal
};

//main export
export default connect(
  null,
  mapDispatchToProps
)(CreateStudentButton);
