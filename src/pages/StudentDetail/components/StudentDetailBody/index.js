//other
import React from "react";

//redux
import { connect } from "react-redux";
import store from "../../../../redux/store";
import { doToggleModal } from "../../../../redux/actions/modal";
import { getModals } from "../../../../redux/selectors/modal";
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
  const { modals, onToggle } = props;

  //use material-ui styles - custom hook
  const classes = useStyles();

  const id = "editName";

  //main return
  return (
    <div className={classes.root}>
      {console.log(modals)}
      <Button onClick={() => onToggle(id)}>Default</Button>
      <BodyDegree />
      <BodyCourses />
    </div>
  );
};

const mapStateToProps = state => ({
  modals: getModals(state)
});

const mapDispatchToProps = dispatch => ({
  onToggle: id => dispatch(doToggleModal(id))
});

//main export
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentDetailBody);
