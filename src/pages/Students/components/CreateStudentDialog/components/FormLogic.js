//other
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import { useQuery } from "react-apollo-hooks";
import {
  GET_ALL_DEGREES,
  GET_ALL_COURSES
} from "../../../../../apollo/queries";

//components
import FormFields from "./FormFields";
import FormDialog from "./FormDialog";

//main function
const FormLogic = props => {
  //destructure props
  const { createCourse, handleDialogClose, modal, loading, error } = props;

  //initial values for form
  const initialValues = {
    name: "",
    coursesPassed: "",
    enrolledDegree: ""
  };

  //yup validation rules for form
  const validationSchema = Yup.object({
    name: Yup.string("Enter the course name").required(
      "Course name is required"
    )
  });

  //apollo query hook for degrees
  const {
    data: { degrees }
  } = useQuery(GET_ALL_DEGREES, {
    suspend: true,
    variables: { orderBy: "name_ASC" }
  });

  //apollo query hook for degrees
  const {
    data: { courses }
  } = useQuery(GET_ALL_COURSES, {
    suspend: true,
    variables: { orderBy: "name_ASC" }
  });

  //main
  return (
    <Formik
      onSubmit={async (values, actions) => {
        console.log("submitting");
        await createCourse({
          variables: {
            data: {
              name: values.name,
              coursesPassed: values.coursesPassed
                ? { connect: { id: values.coursesPassed } }
                : undefined,
              enrolledDegree: values.enrolledDegree
                ? { connect: { id: values.enrolledDegree } }
                : undefined
            }
          }
        });
        actions.setSubmitting(false);
        handleDialogClose();
      }}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {props => (
        <FormDialog handleDialogClose={handleDialogClose} modal={modal}>
          <FormFields
            {...props}
            handleDialogClose={handleDialogClose}
            modal={modal}
            degrees={degrees}
            courses={courses}
            loading={loading}
            error={error}
          />
        </FormDialog>
      )}
    </Formik>
  );
};

//main export
export default FormLogic;
