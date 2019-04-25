//other
import React from "react";
import { withRouter } from "react-router-dom";

//apollo
import ApolloCacheUpdater from "apollo-cache-updater";
import { Mutation } from "react-apollo";
import { GET_ALL_COURSES } from "../../../../apollo/queries";
import { CREATE_COURSE } from "../../../../apollo/mutations";

//material-ui
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

//redux
import { compose } from "redux";
import { connect } from "react-redux";
import { makeGetModalState } from "../../../../redux/ducks/modal/selectors";
import { modalOperations } from "../../../../redux/ducks/modal";

//components
import FormLogic from "./components/FormLogic";
import Loading from "../../../../components/Loading/index";
import Error from "../../../../components/Error/index";

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
          <Dialog open={modal.isOpen} onClose={handleDialogClose}>
            {loading && <Loading />}

            <DialogTitle>Create Course</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                mauris dapibus, fermentum mi nec, laoreet magna. Mauris turpis
                sapien, gravida quis est vel, mattis posuere dui.
              </DialogContentText>
              {error && <Error message={error.message} />}
            </DialogContent>
            <FormLogic
              createCourse={createCourse}
              handleDialogClose={handleDialogClose}
            />
          </Dialog>
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
