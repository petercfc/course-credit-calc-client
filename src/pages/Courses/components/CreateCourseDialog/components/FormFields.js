//other
import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { Field, Form } from "formik";
import {
  TextField,
  Select,
  SelectFieldProps,
  fieldToSelect
} from "formik-material-ui";

//material-ui
import { Button } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import MuiSelect from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

//main function
const FormFields = props => {
  //destructure props
  const { isValid, handleDialogClose, subjects } = props;

  const [labelWidth, setLabelWidth] = useState(0);

  const inputLabelRef = useRef();

  React.useEffect(() => {
    setLabelWidth(inputLabelRef.current.offsetWidth);
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
        <br />
        <br />
        <br />
        <br />
        <FormControl variant="outlined">
          <InputLabel ref={inputLabelRef} htmlFor="subject-select">
            Subject
          </InputLabel>
          <Field
            type="text"
            name="subject"
            label="Subject"
            input={
              <OutlinedInput
                labelWidth={labelWidth}
                id="subject-select"
                fullWidth
              />
            }
            component={Select}
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
