//other
import React from "react";
import { withRouter } from "react-router-dom";

//apollo
import ApolloCacheUpdater from "apollo-cache-updater";
import { Mutation } from "react-apollo";
import { GET_ALL_DEGREES } from "apollo/queries";
import { CREATE_DEGREE } from "apollo/mutations";

//components
import FormLogic from "./components/FormLogic";

//main function
const CreateDegreeDialog = props => {
  //destructure props
  const { history } = props;

  //main return
  return (
    <Mutation
      mutation={CREATE_DEGREE}
      update={(proxy, { data }) => {
        const mutationResult = data.createDegree;
        const updates = ApolloCacheUpdater({
          proxy,
          queriesToUpdate: [GET_ALL_DEGREES],
          searchVariables: {},
          operation: { type: "ADD", row: { type: "SORT", field: "name" } },
          mutationResult
        });
        if (updates) {
          history.push(`/degrees/${data.createDegree.id}`);
        }
      }}
    >
      {(createDegree, { loading, error }) => {
        return (
          <FormLogic
            createDegree={createDegree}
            loading={loading}
            error={error}
          />
        );
      }}
    </Mutation>
  );
};

//main export
export default withRouter(CreateDegreeDialog);
