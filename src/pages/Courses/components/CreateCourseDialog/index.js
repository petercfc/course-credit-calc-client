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
import Loading from "../../../../components/Loading/index";

//transition component
function Transition(props) {
  return <Slide direction="up" {...props} />;
}

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    dialog: {
      paddingTop: theme.spacing(3),
      top: "auto"
    },
    paperFullScreen: {
      borderTopLeftRadius: theme.spacing(2),
      borderTopRightRadius: theme.spacing(2)
    }
  }),
  { withTheme: true }
);

//main function
const CreateCourseDialog = props => {
  //destructure props
  const { history, modal, toggleModal } = props;

  //use material-ui styles - custom hook
  const classes = useStyles();

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
          <Dialog
            className={classes.dialog}
            classes={{
              paperFullScreen: classes.paperFullScreen
            }}
            fullScreen
            scroll="paper"
            TransitionComponent={Transition}
            open={modal.isOpen}
            onClose={handleDialogClose}
          >
            {loading && <Loading />}
            <DialogTitle>Create Course</DialogTitle>
            <DialogContent>
              <FormLogic
                createCourse={createCourse}
                handleDialogClose={handleDialogClose}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose}>Cancel</Button>
              <Button
                variant="contained"
                type="submit"
                disabled={!isValid}
                color="primary"
              >
                Create Course
              </Button>
            </DialogActions>
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
