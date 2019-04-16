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
    <Form>
      <DialogContent>
        <Field
          type="name"
          name="name"
          label="Name"
          variant="outlined"
          component={TextField}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose}>Cancel</Button>
        <Button type="submit" disabled={!isValid}>
          Submit
        </Button>
      </DialogActions>
    </Form>
  );
};

//main export
export default FormFields;
