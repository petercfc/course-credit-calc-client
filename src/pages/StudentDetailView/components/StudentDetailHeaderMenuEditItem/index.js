//other
import React from "react";

// apollo
import { Mutation } from "react-apollo";
import { TOGGLE_MODAL } from "../../../../apollo/mutations";

//material-ui
import MenuItem from "@material-ui/core/MenuItem";

//main function
function EditStudentMenuItem(props) {
  //modal id
  const { id } = props;
  //main return
  return (
    <Mutation mutation={TOGGLE_MODAL} variables={{ id }}>
      {toggleModal => (
        <MenuItem
          onClick={() => {
            toggleModal();
          }}
        >
          Change Name
        </MenuItem>
      )}
    </Mutation>
  );
}

//main export
export default EditStudentMenuItem;
