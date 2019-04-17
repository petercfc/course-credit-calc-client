//other
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

//components
import FormFields from "./FormFields";

//main function
const FormLogic = props => {
  //destructure props
  const { student, studentId, updateStudent, handleDialogClose } = props;

  //initial values for form
  const initialValues = { name: student.name };

  //yup validation rules for form
  const validationSchema = Yup.object({
    name: Yup.string("Enter a name").required("Name is required")
  });

  //main
  return (
    <Formik
      onSubmit={async (values, actions) => {
        await updateStudent({
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
      {props => <FormFields {...props} handleDialogClose={handleDialogClose} />}
    </Formik>
  );
};

//main export
export default FormLogic;
