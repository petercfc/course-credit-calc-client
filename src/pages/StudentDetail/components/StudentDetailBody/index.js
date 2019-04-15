//other
import React from "react";

//redux
import { connect } from "react-redux";
import store from "../../../../redux/store";
import { doToggleModal } from "../../../../redux/actions/modal";
import { makeGetModal } from "../../../../redux/selectors/modal";
import { TOGGLE_MODAL } from "../../../../redux/constants/actionTypes";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

//components
import BodyDegree from "./components/BodyDegree";
import BodyCourses from "./components/BodyCourses";

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    root: { paddingTop: theme.spacing(6) }
  }),
  { withTheme: true }
);

//main function
const StudentDetailBody = props => {
  //destructure props
  const { editStudentNameModal, toggleModal } = props;

  //use material-ui styles - custom hook
  const classes = useStyles();

  const modalType = "editStudentName";
  const modalProps = { studentId: "cjubc4sjmgkek0b03qztplk4p" };

  //main return
  return (
    <div className={classes.root}>
      <Button onClick={() => toggleModal(modalType, modalProps)}>
        Toggle Modal
      </Button>
      {editStudentNameModal.isOpen && <p>open</p>}
      {console.log("editStudentNameModal", editStudentNameModal)}

      <BodyDegree />
      <BodyCourses />
    </div>
  );
};

const mapStateToProps = () => {
  //get reselect function
  const getModal = makeGetModal();
  //pass state and component props to the call to the selector
  return (state, ownProps) => {
    //recieve editNameModal from selector
    return { editStudentNameModal: getModal(state, ownProps) };
  };
};

const mapDispatchToProps = dispatch => ({
  toggleModal: (modalType, modalProps) =>
    dispatch(doToggleModal(modalType, modalProps))
});

//main export
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentDetailBody);
