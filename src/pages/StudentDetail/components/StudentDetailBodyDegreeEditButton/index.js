//other
import React from "react";

// apollo
import { Mutation } from "react-apollo";
import { TOGGLE_MODAL } from "../../../../apollo/mutations";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    menuItem: {}
  }),
  { withTheme: true }
);

//main function
function EditStudentMenuItem(props) {
  //use material-ui styles custom hook
  const classes = useStyles();
  //modal id
  const { id } = props;
  //main return
  return (
    <Mutation mutation={TOGGLE_MODAL} variables={{ id }}>
      {toggleModal => (
        <div>
          <Button
            className={classes.menuItem}
            color="primary"
            onClick={() => {
              toggleModal();
            }}
          >
            Change Degree
          </Button>
        </div>
      )}
    </Mutation>
  );
}

//main export
export default EditStudentMenuItem;
