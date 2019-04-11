//other
import React from "react";

import useStudentDetail from "../../../hooks/useStudentDetail";
import { withRouter } from "react-router-dom";
import useForm from "../hooks/useForm";
import useLabelWidth from "../hooks/useLabelWidth";

// apollo
import { GET_ALL_DEGREES } from "../../../../../apollo/queries";
import { UPDATE_STUDENT } from "../../../../../apollo/mutations";

import { useQuery, useMutation } from "react-apollo-hooks";

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
import EmptyState from "../../../../../components/EmptyState";
import Error from "../../../../../components/Error";

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    root: {
      // display: "flex"
      // flexWrap: "wrap"
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2
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
  const { modals, toggleModal, student, closeMenu } = useStudentDetail();

  //degrees query
  const {
    data: { degrees },
    error
  } = useQuery(GET_ALL_DEGREES);

  //update student mutation
  const updateStudent = useMutation(UPDATE_STUDENT, {
    variables: { data: { name: student.name }, where: { id: student.id } },
    update: () => {
      toggleModal("editDegree");
      navToNewStudent(student.id);
    }
  });

  //input ref for field length
  const inputLabelRef = React.useRef(null);

  //label width hook
  const { labelWidth, changeLabelWidth } = useLabelWidth(inputLabelRef);

  // effect hook to listen for labelWidth changes
  React.useEffect(() => {
    changeLabelWidth();
  }, []);

  //form hook
  const { values, handleChange, handleSubmit } = useForm(updateStudent);

  //nav to student
  const navToNewStudent = id => {
    history.push(`/students/:${id}`);
  };

  //return error message
  if (error) return <Error message={error} />;

  //return error message
  if (!degrees) return <EmptyState message="There are no degrees." />;

  //main return
  return (
    <Dialog
      open={modals.editDegree}
      onClose={() => {
        toggleModal("editDegree");
        closeMenu();
      }}
    >
      <form className={classes.root} onSubmit={handleSubmit} autoComplete="off">
        <DialogTitle>Change Degree</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
            sagittis libero, eu volutpat orci. Nulla facilisi.
          </DialogContentText>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabelRef} htmlFor="degree-id">
              Degree
            </InputLabel>
            <Select
              value={values.degree || ""}
              onChange={handleChange}
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
          <Button type="submit" color="primary" autoFocus>
            Change
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

//main export - with router HOC
export default withRouter(BodyDegreeEditDialogForm);
