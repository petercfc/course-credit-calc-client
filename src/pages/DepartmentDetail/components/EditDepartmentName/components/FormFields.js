//other
import React from "react";
import { Field, Form } from "formik";
import { TextField } from "formik-material-ui";

//material-ui
import { Button } from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

//main function
const FormFields = props => {
  //destructure props
  const { isValid, handleDialogClose } = props;

  //main
  return (
    <Form autoComplete="off">
      <DialogContent>
        <Field
          type="text"
          name="name"
          label="Student"
          variant="outlined"
          component={TextField}
          autoFocus
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose}>Cancel</Button>
        <Button type="submit" disabled={!isValid} color="primary">
          Save
        </Button>
      </DialogActions>
    </Form>
  );
};

//main export
export default FormFields;
