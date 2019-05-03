//other
import React from "react";
import { withRouter } from "react-router-dom";

//apollo
import ApolloCacheUpdater from "apollo-cache-updater";
import { Mutation } from "react-apollo";
import { GET_ALL_DEPARTMENTS } from "../../../../apollo/queries";
import { CREATE_DEPARTMENT } from "../../../../apollo/mutations";

//components
import FormLogic from "./components/FormLogic";

//main function
const CreateDepartmentDialog = props => {
  //destructure props
  const { history } = props;

  //main return
  return (
    <Mutation
      mutation={CREATE_DEPARTMENT}
      update={(proxy, { data }) => {
        const mutationResult = data.createDepartment;
        const updates = ApolloCacheUpdater({
          proxy,
          queriesToUpdate: [GET_ALL_DEPARTMENTS],
          searchVariables: {},
          operation: { type: "ADD", row: { type: "SORT", field: "name" } },
          mutationResult
        });
        if (updates) {
          history.push(`/departments/${data.createDepartment.id}`);
        }
      }}
    >
      {(createDepartment, { loading, error }) => {
        return (
          <FormLogic
            createDepartment={createDepartment}
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
