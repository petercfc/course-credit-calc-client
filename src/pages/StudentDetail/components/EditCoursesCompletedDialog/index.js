//other
import React from "react";
import { withRouter } from "react-router-dom";

//apollo
import ApolloCacheUpdater from "apollo-cache-updater";
import { Mutation } from "react-apollo";
import { GET_ALL_STUDENTS } from "apollo/queries";
import { UPDATE_STUDENT } from "apollo/mutations";

//components
import FormLogic from "./components/FormLogic";

//main function
const CreateDepartmentDialog = props => {
  //destructure props
  const { history, student } = props;

  //main return
  return (
    <Mutation
      mutation={UPDATE_STUDENT}
      update={(proxy, { data }) => {
        const mutationResult = data.updateStudent;
        const updates = ApolloCacheUpdater({
          proxy,
          queriesToUpdate: [GET_ALL_STUDENTS],
          searchVariables: {},
          operation: { type: "ADD", row: { type: "SORT", field: "name" } },
          mutationResult
        });
        if (updates) {
          history.push(`/students/${data.updateStudent.id}`);
        }
      }}
    >
      {(updateStudent, { loading, error }) => {
        return (
          <FormLogic
            student={student}
            updateStudent={updateStudent}
            loading={loading}
            error={error}
          />
        );
      }}
    </Mutation>
  );
};

//main export
export default withRouter(CreateDepartmentDialog);
