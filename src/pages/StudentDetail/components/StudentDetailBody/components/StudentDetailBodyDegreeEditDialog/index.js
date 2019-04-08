//other
import React from "react";

// apollo
import { Query, Mutation } from "react-apollo";
import { GET_MODAL } from "../../../../../../apollo/queries";
import { TOGGLE_MODAL } from "../../../../../../apollo/mutations";

//components
import StudentDetailBodyDegreeEditDialogForm from "../StudentDetailBodyDegreeEditDialogForm";
//main function
function StudentDetailBodyDegreeEditDialogSelect(props) {
  const { student, id } = props;
  //main return
  return (
    <Mutation mutation={TOGGLE_MODAL} variables={{ id }}>
      {(toggleModal, { data }) => (
        <Query query={GET_MODAL} variables={{ id }}>
          {({ data: { getModal } }) => (
            <React.Fragment>
              {getModal && (
                <StudentDetailBodyDegreeEditDialogForm
                  open={getModal.isOpen}
                  toggleModal={toggleModal}
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
export default StudentDetailBodyDegreeEditDialogSelect;
