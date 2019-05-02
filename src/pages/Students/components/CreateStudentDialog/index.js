//other
import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";

//apollo
import ApolloCacheUpdater from "apollo-cache-updater";
import { Mutation } from "react-apollo";
import { GET_ALL_STUDENTS } from "../../../../apollo/queries";
import { CREATE_STUDENT } from "../../../../apollo/mutations";

//redux
import { useSelector, useDispatch } from "react-redux";
import { getModal } from "../../../../redux/ducks/modal/selectors";
import { modalOperations } from "../../../../redux/ducks/modal";

//components
import FormLogic from "./components/FormLogic";

//main function
const CreateStudentDialog = props => {
  //destructure props
  const { history } = props;

  //redux hooks selectors
  const modal = useSelector(state => getModal(state, "createStudent"));

  //redux hook actions
  const dispatch = useDispatch();
  const toggleModal = useCallback(
    () => dispatch(modalOperations.toggleModal("createStudent")),
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

//main export
export default withRouter(CreateStudentDialog);
