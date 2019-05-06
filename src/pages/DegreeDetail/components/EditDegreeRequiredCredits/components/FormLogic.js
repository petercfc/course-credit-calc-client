//other
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

//components
import FormFields from "./FormFields";

//main function
const FormLogic = props => {
  //destructure props
  const { degree, degreeId, updateDegree, handleDialogClose } = props;

  //initial values for form
  const initialValues = { requiredCredits: degree.requiredCredits };

  //yup validation rules for form
  const validationSchema = Yup.object({
    requiredCredits: Yup.number("Enter the number of credits").required(
      "Number of credits is required"
    )
  });

  //main
  return (
    <Formik
      onSubmit={async (values, actions) => {
        await updateDegree({
          variables: {
            data: {
              requiredCredits: values.requiredCredits
            },
            where: { id: degree.id }
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
