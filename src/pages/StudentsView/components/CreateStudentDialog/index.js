//other
import React from "react";

// apollo
import { Query, Mutation } from "react-apollo";
import { GET_MODAL } from "../../../../apollo/queries";
import { TOGGLE_MODAL } from "../../../../apollo/mutations";

//components
import CreateStudentDialogForm from "../CreateStudentDialogForm";

//main function
function CreateStudentDialog(props) {
  const { id } = props;
  //main return
  return (
    <Mutation mutation={TOGGLE_MODAL} variables={{ id }}>
      {(toggleModal, { data }) => (
        <React.Fragment>
          <Query query={GET_MODAL} variables={{ id }}>
            {({ data: { getModal } }) => (
              <React.Fragment>
                {getModal && (
                  <CreateStudentDialogForm
                    modal={getModal}
                    toggleModal={toggleModal}
                  />
                )}
              </React.Fragment>
            )}
          </Query>
        </React.Fragment>
      )}
    </Mutation>
  );
}

//main export
export default CreateStudentDialog;
