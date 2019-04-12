//other
import React from "react";

import useStudentDetail from "../../../hooks/useStudentDetail";
import { withRouter } from "react-router-dom";
import useForm from "../hooks/useForm";
import useLabelWidth from "../hooks/useLabelWidth";

// apollo
import { Mutation, Query } from "react-apollo";
import { GET_ALL_DEGREES } from "../../../../../apollo/queries";
import { UPDATE_STUDENT } from "../../../../../apollo/mutations";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

//components
import Loading from "../../../../../components/Loading";

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    root: {},
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    }
  }),
  { withTheme: true }
);

//main function
function BodyDegreeEditDialogForm(props) {
  //destructure props
  const { history } = props;

  //material-ui hook
  const classes = useStyles();

  //use context state hook
  const { modals, toggleModal, closeMenu, student } = useStudentDetail();

  //form hook
  const { values, handleChange, handleSubmit } = useForm();

  //input ref for field length
  const inputLabelRef = React.useRef(null);

  //label width hook
  const { labelWidth, changeLabelWidth } = useLabelWidth(inputLabelRef);

  // effect hook to listen for labelWidth changes
  React.useEffect(() => {
    changeLabelWidth();
  }, []);

  //main return
  return (
    <Mutation
      mutation={UPDATE_STUDENT}
      variables={{
        data: {
          enrolledDegree: { connect: { id: "cjt3olkq9r8a00b35hr6u45o1" } }
        },
        where: { id: "cjubc4sjmgkek0b03qztplk4p" }
      }}
      update={() => {
        console.log("mutation update");
        // toggleModal("editDegree");
        // closeMenu();
      }}
    >
      {(updateStudent, { loading, error }) => (
        <Dialog
          open={modals.editDegree}
          onClose={() => {
            toggleModal("editDegree");
            closeMenu();
          }}
        >
          {loading && <Loading />}
          <form
            className={classes.root}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <DialogTitle>Change Degree</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                vel sagittis libero, eu volutpat orci. Nulla facilisi.
              </DialogContentText>
              <Query query={GET_ALL_DEGREES}>
                {({ data: { degrees } }) => (
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel ref={inputLabelRef} htmlFor="degree-id">
                      Degree
                    </InputLabel>
                    <Select
                      value={values.degree || student.enrolledDegree.id}
                      onChange={event => {
                        handleChange(event);
                        changeLabelWidth();
                      }}
                      input={
                        <OutlinedInput
                          labelWidth={labelWidth}
                          name="degree"
                          id="degree-id"
                        />
                      }
                    >
                      {degrees.map(degree => (
                        <MenuItem key={degree.id} value={degree.id}>
                          {degree.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              </Query>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  toggleModal("editDegree");
                  closeMenu();
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  console.log("clicked change");
                  updateStudent();
                }}
                type="submit"
                color="primary"
                autoFocus
              >
                Change
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      )}
    </Mutation>
  );
}

//main export - with router HOC
export default withRouter(BodyDegreeEditDialogForm);
