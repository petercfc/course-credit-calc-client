//other
import React from "react";
import { withRouter } from "react-router-dom";

//apollo
import ApolloCacheUpdater from "apollo-cache-updater";
import { Mutation } from "react-apollo";
import { GET_ALL_SUBJECTS } from "apollo/queries";
import { CREATE_SUBJECT } from "apollo/mutations";

//components
import FormLogic from "./components/FormLogic";

//main function
const CreateSubjectDialog = props => {
  //destructure props
  const { history } = props;

  //main return
  return (
    <Mutation
      mutation={CREATE_SUBJECT}
      update={(proxy, { data }) => {
        const mutationResult = data.createSubject;
        const updates = ApolloCacheUpdater({
          proxy,
          queriesToUpdate: [GET_ALL_SUBJECTS],
          searchVariables: {},
          operation: { type: "ADD", row: { type: "SORT", field: "name" } },
          mutationResult
        });
        if (updates) {
          history.push(`/subjects/${data.createSubject.id}`);
        }
      }}
    >
      {(createSubject, { loading, error }) => {
        return (
          <FormLogic
            createSubject={createSubject}
            loading={loading}
            error={error}
          />
        );
      }}
    </Mutation>
  );
};

//main export
export default withRouter(CreateSubjectDialog);
