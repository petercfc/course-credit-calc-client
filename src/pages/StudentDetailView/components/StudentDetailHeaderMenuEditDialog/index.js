//other
import React from "react";

// apollo
import { Query, Mutation } from "react-apollo";
import { GET_MODAL } from "../../../../apollo/queries";
import { TOGGLE_MODAL } from "../../../../apollo/mutations";

//components
import StudentDetailHeaderMenuEditDialogForm from "../StudentDetailHeaderMenuEditDialogForm";

//main function
function EditStudentDialog(props) {
  const { student, id, handleCloseMenu } = props;
  //main return
  return (
    <Mutation mutation={TOGGLE_MODAL} variables={{ id }}>
      {(toggleModal, { data }) => (
        <Query query={GET_MODAL} variables={{ id }}>
          {({ data: { getModal } }) => (
            <React.Fragment>
              {getModal && (
                <StudentDetailHeaderMenuEditDialogForm
                  handleCloseMenu={handleCloseMenu}
                  open={getModal.isOpen}
                  toggleModal={toggleModal}
                  id={id}
                  student={student}
                />
              )}
            </React.Fragment>
          )}
        </Query>
      )}
    </Mutation>
  );
}

//main export
export default EditStudentDialog;
