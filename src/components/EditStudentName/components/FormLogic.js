//other
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

//apollo
import { Mutation } from "react-apollo";
import { UPDATE_STUDENT } from "../../../apollo/mutations";

//components
import FormFields from "./FormFields";

//main function
const FormLogic = props => {
  //destructure props
  const { studentId, handleDialogClose } = props;

  //initial values for form
  const initialValues = { name: "" };

  //yup validation rules for form
  const validationSchema = Yup.object({
    name: Yup.string("Enter a name").required("Name is required")
  });

  //main
  return (
    <Mutation mutation={UPDATE_STUDENT}>
      {updateStudent => (
        <Formik
          onSubmit={async (values, actions) => {
            updateStudent({
              variables: {
                data: {
                  name: values.name
                },
                where: { id: studentId }
              }
            });
            actions.setSubmitting(false);
            handleDialogClose();
          }}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {props => (
            <FormFields {...props} handleDialogClose={handleDialogClose} />
          )}
        </Formik>
      )}
    </Mutation>
  );
};

//main export
export default FormLogic;
