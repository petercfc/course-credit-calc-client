//other
import React from "react";

//redux
import { useActions } from "react-redux";
import { modalOperations } from "../../../redux/ducks/modal";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    root: {
      position: "fixed",
      display: "flex",
      justifyContent: "center",
      width: "100%",
      zIndex: 1200
    },
    fab: {
      position: "fixed",
      bottom: 32
    },
    extendedIcon: {
      marginRight: theme.spacing(1)
    }
  }),
  { withTheme: true }
);

//main function
const EditCoursesCompletedButton = props => {
  //destreucture props
  const { student } = props;

  //material-ui hook
  const classes = useStyles();

  //redux hook actions
  const toggleModal = useActions(
    () =>
      modalOperations.toggleModal("editStudentCoursesCompleted", {
        studentId: student.id
      }),
    []
  );

  //main return
  return (
    <div className={classes.root}>
      <Fab
        className={classes.fab}
        size="large"
        variant="extended"
        aria-label="Edit Courses Completed"
        onClick={toggleModal}
      >
        <EditIcon className={classes.extendedIcon} />
        Edit Courses Completed
      </Fab>
    </div>
  );
};

//main export
export default EditCoursesCompletedButton;
