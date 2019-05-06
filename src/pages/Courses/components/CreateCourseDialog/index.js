//other
import React from "react";
import { withRouter } from "react-router-dom";

//apollo
import ApolloCacheUpdater from "apollo-cache-updater";
import { Mutation } from "react-apollo";
import {
  GET_ALL_COURSES,
  GET_COURSES_IN_SUBJECT,
  GET_COURSES_IN_DEPARTMENT,
  GET_SUBJECT
} from "apollo/queries";
import { CREATE_COURSE } from "apollo/mutations";

//redux
import { compose } from "redux";
import { connect } from "react-redux";
import { makeGetModalState } from "redux/ducks/modal/selectors";
import { modalOperations } from "redux/ducks/modal";

//components
import FormLogic from "./components/FormLogic";

//main function
const CreateCourseDialog = props => {
  //destructure props
  const { history, modal, toggleModal } = props;

  //callback for when dialog closes
  const handleDialogClose = () => {
    toggleModal("createCourse");
  };

  return (
    <Mutation
      mutation={CREATE_COURSE}
      update={(proxy, { data: { createCourse } }) => {
        const mutationResult = createCourse;
        const updates = ApolloCacheUpdater({
          proxy,
          operator: "ANY",
          queriesToUpdate: [GET_ALL_COURSES],
          searchVariables: {},
          operation: { type: "ADD", row: { type: "SORT", field: "name" } },
          mutationResult
        });
        if (updates) {
          history.push(`/courses/${createCourse.id}`);
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

const makeMapStateToProps = () => {
  const getModalState = makeGetModalState();
  return (state, props) => getModalState(state, props);
};

const mapDispatchToProps = {
  toggleModal: modalOperations.toggleModal
};

//compose hocs
const enhance = compose(
  withRouter,
  connect(
    makeMapStateToProps,
    mapDispatchToProps
  )
);
//main export
export default enhance(CreateCourseDialog);
