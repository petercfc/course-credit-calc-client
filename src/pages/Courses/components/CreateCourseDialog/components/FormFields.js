//other
import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { Field, Form } from "formik";
import { TextField, Select } from "formik-material-ui";

//material-ui
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    formControl: {
      minWidth: 120,
      marginTop: theme.spacing(1)
    }
  }),
  { withTheme: true }
);

//main function
const FormFields = props => {
  //destructure props
  const { isValid, handleDialogClose, subjects } = props;

  //set course select label width
  const [labelWidth, setLabelWidth] = useState(0);

  //set course select ref
  const inputLabelRef = useRef();

  //use material-ui styles - custom hook
  const classes = useStyles();

  //effect hook
  React.useEffect(() => {
    setLabelWidth(ReactDOM.findDOMNode(inputLabelRef.current).offsetWidth);
    console.log("set label width");
  }, [inputLabelRef]);

  //main
  return (
    <Form autoComplete="off">
      <DialogContent>
        <Field
          type="name"
          name="name"
          label="Name"
          component={TextField}
          variant="outlined"
          autoFocus
          fullWidth
        />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabelRef} htmlFor="subject-select">
            Courses
          </InputLabel>
          <Field
            type="text"
            name="subject"
            component={Select}
            input={
              <OutlinedInput
                labelWidth={labelWidth}
                name="subject"
                id="subject-select"
              />
            }
            inputProps={{ name: "subject", id: "subject" }}
          >
            <MenuItem key="0" value="">
              Select None
            </MenuItem>
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
