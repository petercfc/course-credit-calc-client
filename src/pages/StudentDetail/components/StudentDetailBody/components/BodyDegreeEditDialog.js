//other
import React from "react";

import useStudentDetail from "../../../hooks/useStudentDetail";
import { withRouter } from "react-router-dom";
import useForm from "../hooks/useForm";
import useLabelWidth from "../hooks/useLabelWidth";

// apollo
import { Mutation, Query } from "react-apollo";
import { useMutation, useQuery } from "react-apollo-hooks";
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
  console.log(student);

  //form hook
  const { values, handleChange, handleSubmit } = useForm();

  //input ref for field length
  const inputLabelRef = React.useRef(null);

  //label width hook
  const { labelWidth, changeLabelWidth } = useLabelWidth(inputLabelRef);

  let enrolledDegree = "";
  // effect hook to listen for labelWidth changes
  React.useEffect(() => {
    changeLabelWidth();
    if (student.enrolledDegree) {
      enrolledDegree = student.enrolledDegree.id;
    }
  }, []);

  //main return
  return (
    <Mutation
      mutation={UPDATE_STUDENT}
      variables={{
        data: {
          enrolledDegree: {
            connect: { id: values.degree || enrolledDegree || null }
          }
        },
        where: { id: student.id }
      }}
      update={() => {
        console.log("mutation update");
        toggleModal("editDegree");
        closeMenu();
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
          {error && <div>error</div>}
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
              <Query
                query={GET_ALL_DEGREES}
                onComplete={() => {
                  console.log("queried");
                }}
              >
                {({ data: { degrees } }) => (
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel ref={inputLabelRef} htmlFor="degree-id">
                      Degree
                    </InputLabel>
                    {console.log("degrees", degrees)}
                    <Select
                      value={values.degree || enrolledDegree}
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
                      {degrees &&
                        degrees.map(degree => (
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
