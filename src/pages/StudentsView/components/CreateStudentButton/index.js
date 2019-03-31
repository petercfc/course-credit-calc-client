//other
import React from "react";

// apollo
import { Mutation } from "react-apollo";
import { TOGGLE_MODAL } from "../../../../apollo/mutations";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    root: {
      position: "fixed",
      display: "flex",
      justifyContent: "center",
      width: "100%"
    },
    fab: {
      position: "fixed",
      bottom: 72
    },
    extendedIcon: {
      marginRight: theme.spacing(1)
    }
  }),
  { withTheme: true }
);

//main function
function CreateStudentButton(props) {
  //use material-ui styles custom hook
  const classes = useStyles();
  //modal id
  const { id } = props;
  //main return
  return (
    <Mutation mutation={TOGGLE_MODAL} variables={{ id }}>
      {toggleModal => (
        <div className={classes.root}>
          <Fab
            className={classes.fab}
            size="large"
            variant="extended"
            aria-label="Create Student"
            onClick={toggleModal}
          >
            <AddIcon className={classes.extendedIcon} />
            Create Student
          </Fab>
        </div>
      )}
    </Mutation>
  );
}

//main export
export default CreateStudentButton;
