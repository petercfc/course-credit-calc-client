//other
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

//components
import FormFields from "./FormFields";

//main function
const FormLogic = props => {
  //destructure props
  const { createCourse, handleDialogClose } = props;

  //initial values for form
  const initialValues = { name: "" };

  //yup validation rules for form
  const validationSchema = Yup.object({
    name: Yup.string("Enter a name").required("Name is required")
  });

  //main
  return (
    <Formik
      onSubmit={async (values, actions) => {
        await createCourse({
          variables: {
            data: {
              name: values.name,
              number: "COURSE000",
              level: 100,
              credits: 0
            }
          }
        });
        actions.setSubmitting(false);
        handleDialogClose();
      }}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {props => <FormFields {...props} handleDialogClose={handleDialogClose} />}
    </Formik>
  );
};

//main export
export default FormLogic;
