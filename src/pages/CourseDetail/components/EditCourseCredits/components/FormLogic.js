//other
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

//components
import FormFields from "./FormFields";

//main function
const FormLogic = props => {
  //destructure props
  const { course, courseId, updateCourse, handleDialogClose } = props;

  //initial values for form
  const initialValues = { credits: course.credits };

  //yup validation rules for form
  const validationSchema = Yup.object({
    credits: Yup.number("Enter the number of credits").required(
      "Number of credits is required"
    )
  });

  //main
  return (
    <Formik
      onSubmit={async (values, actions) => {
        await updateCourse({
          variables: {
            data: {
              credits: values.credits
            },
            where: { id: course.id }
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
