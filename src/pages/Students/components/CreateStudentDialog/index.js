//other
import React from "react";
import { withRouter } from "react-router-dom";

//apollo
import ApolloCacheUpdater from "apollo-cache-updater";
import { Mutation } from "react-apollo";
import { GET_ALL_STUDENTS } from "../../../../apollo/queries";
import { CREATE_STUDENT } from "../../../../apollo/mutations";

//redux
import { useSelector, useActions } from "react-redux";
import { makeGetModalState } from "../../../../redux/ducks/modal/selectors";
import { modalOperations } from "../../../../redux/ducks/modal";

//components
import FormLogic from "./components/FormLogic";

//main function
const CreateStudentDialog = props => {
  //destructure props
  const { history } = props;

  //redux hooks
  const modal = useSelector(
    (state, props) => makeGetModalState(state, props),
    []
  );
  console.log("modal", modal);
  const getModalState = makeGetModalState();
  console.log("getModalState", getModalState);

  const toggleModal = useActions(
    () => modalOperations.toggleModal("createStudent"),
    []
  );

  //callback for when dialog closes
  const handleDialogClose = () => {
    toggleModal();
  };

  return (
    <Mutation
      mutation={CREATE_STUDENT}
      update={(proxy, { data: { createStudent } }) => {
        const mutationResult = createStudent;
        const updates = ApolloCacheUpdater({
          proxy,
          queriesToUpdate: [GET_ALL_STUDENTS],
          searchVariables: {},
          operation: { type: "ADD", row: { type: "SORT", field: "name" } },
          mutationResult
        });
        if (updates) {
          history.push(`/students/${createStudent.id}`);
        }
      }}
    >
      {(createCourse, { loading, error }) => {
        return (
          <FormLogic
            handleDialogClose={handleDialogClose}
            modal={modal}
            createCourse={createCourse}
            loading={loading}
            error={error}
          />
        );
      }}
    </Mutation>
  );
};

// const makeMapStateToProps = () => {
//   const getModalState = makeGetModalState();
//   return (state, props) => getModalState(state, props);
// };

//main export
export default withRouter(CreateStudentDialog);
