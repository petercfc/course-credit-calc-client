//other
import React from "react";
import { withRouter } from "react-router-dom";

//apollo
import ApolloCacheUpdater from "apollo-cache-updater";
import { Mutation } from "react-apollo";
import { GET_ALL_COURSES } from "../../../../apollo/queries";
import { CREATE_COURSE } from "../../../../apollo/mutations";

//redux
import { compose } from "redux";
import { connect } from "react-redux";
import { makeGetModalState } from "../../../../redux/ducks/modal/selectors";
import { modalOperations } from "../../../../redux/ducks/modal";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

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
          queriesToUpdate: [GET_ALL_COURSES],
          searchVariables: {},
          operation: { type: "ADD", row: { type: "SORT", field: "name" } },
          mutationResult
        });
        if (updates) {
          console.log(`Course Created`);
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
