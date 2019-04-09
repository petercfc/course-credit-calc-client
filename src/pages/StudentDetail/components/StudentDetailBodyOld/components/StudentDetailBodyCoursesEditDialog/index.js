//other
import React from "react";

// apollo
import { Query, Mutation } from "react-apollo";
import { GET_MODAL } from "../../../../../../apollo/queries";
import { TOGGLE_MODAL } from "../../../../../../apollo/mutations";

//components
import StudentDetailBodyCoursesEditDialogForm from "../StudentDetailBodyCoursesEditDialogForm";
//main function
function StudentDetailBodyCoursesEditDialog(props) {
  const { student, id } = props;

  //main return
  return (
    <Mutation mutation={TOGGLE_MODAL} variables={{ id }}>
      {(toggleModal, { data }) => (
        <Query query={GET_MODAL} variables={{ id }}>
          {({ data: { getModal } }) => (
            <React.Fragment>
              {getModal && (
                <StudentDetailBodyCoursesEditDialogForm
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
export default StudentDetailBodyCoursesEditDialog;
