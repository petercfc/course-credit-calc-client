//other
import React, { useState, useRef } from "react";
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
    credits: {
      minWidth: 120,
      marginTop: theme.spacing(1)
    },
    formControl: {
      minWidth: 240,
      marginTop: theme.spacing(1)
    }
  }),
  { withTheme: true }
);

//main function
const FormFields = props => {
  //destructure props
  const { isValid, handleDialogClose, subjects } = props;

  //state hook for input labels
  const [subjectsLabelWidth, setSubjectsLabelWidth] = useState(0);
  const [creditsLabelWidth, setCreditsLabelWidth] = useState(0);

  //ref hook for input labels
  const subjectsLabelRef = useRef(null);
  const creditsLabelRef = useRef(null);

  //use material-ui styles - custom hook
  const classes = useStyles();

  //effect hook
  React.useEffect(() => {
    setSubjectsLabelWidth(subjectsLabelRef.current.offsetWidth);
    setCreditsLabelWidth(creditsLabelRef.current.offsetWidth);
    console.log("set label width");
  }, []);

  //main
  return (
    <Form autoComplete="off">
      <DialogContent>
        <Field
          type="text"
          name="name"
          label="Name"
          component={TextField}
          variant="outlined"
          fullWidth
        />
        <Field
          type="text"
          name="number"
          label="Number"
          component={TextField}
          variant="outlined"
          fullWidth
        />
        <Field
          type="number"
          name="level"
          label="Level"
          component={TextField}
          variant="outlined"
          fullWidth
        />
        <FormControl variant="outlined" className={classes.credits}>
          <InputLabel ref={creditsLabelRef} htmlFor="credits-select">
            Credits
          </InputLabel>
          <Field
            type="number"
            name="credits"
            component={Select}
            input={
              <OutlinedInput
                labelWidth={creditsLabelWidth}
                name="credits"
                id="credits-select"
              />
            }
            inputProps={{ name: "credits", id: "credits" }}
          >
            <MenuItem key="1" value={1}>
              1
            </MenuItem>
            <MenuItem key="2" value={2}>
              2
            </MenuItem>
            <MenuItem key="3" value={3}>
              3
            </MenuItem>
            <MenuItem key="4" value={4}>
              4
            </MenuItem>
            <MenuItem key="5" value={5}>
              5
            </MenuItem>
          </Field>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={subjectsLabelRef} htmlFor="subject-select">
            Subjects
          </InputLabel>
          <Field
            type="text"
            name="subject"
            component={Select}
            input={
              <OutlinedInput
                labelWidth={subjectsLabelWidth}
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
