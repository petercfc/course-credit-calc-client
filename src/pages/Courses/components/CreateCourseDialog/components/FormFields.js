//other
import React from "react";
import ReactDOM from "react-dom";
import { Field, Form } from "formik";
import { TextField, Select } from "formik-material-ui";

//material-ui
import { Button } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

//main function
const FormFields = props => {
  //destructure props
  const { isValid, handleDialogClose, subjects } = props;

  const [state, setState] = React.useState({
    labelWidth: 0
  });

  const inputLabelRef = React.useRef(null);

  React.useEffect(() => {
    // setState({
    //   ...state,
    //   labelWidth: ReactDOM.findDOMNode(inputLabelRef.current).offsetWidth
    // });
  }, []);

  //main
  return (
    <Form autoComplete="off">
      <DialogContent>
        <Field
          type="name"
          name="name"
          label="Name"
          variant="outlined"
          component={TextField}
          autoFocus
          fullWidth
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="subject-simple">Age</InputLabel>
          <Field
            type="text"
            name="subject"
            label="Subject"
            input={
              <OutlinedInput
                labelWidth={state.labelWidth}
                name="subject"
                id="subject-simple"
              />
            }
            component={Select}
            fullWidth
          >
            {subjects.map(subject => (
              <MenuItem key={subject.id} value={subject.id}>
                {subject.name}
              </MenuItem>
            ))}
          </Field>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose}>Cancel</Button>
        <Button type="submit" disabled={!isValid} color="primary">
          Create Course
        </Button>
      </DialogActions>
    </Form>
  );
};

//main export
export default FormFields;
