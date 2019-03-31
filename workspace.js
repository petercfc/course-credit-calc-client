//other
import React from "react";
import { withRouter } from "react-router-dom";

// apollo
import { Mutation } from "react-apollo";
import { DELETE_STUDENT } from "../../../../apollo/mutations";
import { GET_ALL_STUDENTS } from "../../../../apollo/queries";

//material-ui
import { makeStyles } from "@material-ui/styles";

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    root: {}
  }),
  { withTheme: true }
);

//main function
function DeleteStudentButton(props) {
  //use material-ui styles custom hook
  const classes = useStyles();
  const { student, history } = props;
  //main return
  return (
    <Mutation mutation={DELETE_STUDENT} update={update}>
      {(deleteStudent, { data }) => (
        <div className={classes.root}>
          <Button
            color="secondary"
            onClick={async () => {
              history.goBack();
            }}
          >
            Delete
          </Button>
        </div>
      )}
    </Mutation>
  );
}

//main export - with router HOC
export default withRouter(DeleteStudentButton);
