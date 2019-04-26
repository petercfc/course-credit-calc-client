//other
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import { useQuery } from "react-apollo-hooks";
import { GET_ALL_SUBJECTS } from "../../../../../apollo/queries";

//components
import FormFields from "./FormFields";

//main function
const FormLogic = props => {
  //destructure props
  const { createCourse, handleDialogClose } = props;

  //initial values for form
  const initialValues = { name: "", subject: "" };

  //yup validation rules for form
  const validationSchema = Yup.object({
    name: Yup.string("Enter a name").required("Name is required")
  });

  //apollo query hook
  const {
    data: { subjects },
    error
  } = useQuery(GET_ALL_SUBJECTS, {
    suspend: true,
    variables: { orderBy: "name_ASC" }
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
              credits: 0,
              subject: values.subject
                ? { connect: { id: values.subject } }
                : undefined
            }
          }
        });
        console.log("submiteed", values);
        actions.setSubmitting(false);
        handleDialogClose();
      }}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {props => (
        <FormFields
          {...props}
          handleDialogClose={handleDialogClose}
          subjects={subjects}
        />
      )}
    </Formik>
  );
};

//main export
export default FormLogic;
