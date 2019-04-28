//other
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import { useQuery } from "react-apollo-hooks";
import {
  GET_ALL_SUBJECTS,
  GET_ALL_DEGREES,
  GET_ALL_DEPARTMENTS,
  GET_ALL_COURSES
} from "../../../../../apollo/queries";

//components
import FormFields from "./FormFields";

//main function
const FormLogic = props => {
  //destructure props
  const { createCourse, handleDialogClose, modal, loading, error } = props;

  //initial values for form
  const initialValues = {
    name: "",
    number: "",
    level: 100,
    credits: 3,
    subject: "",
    degree: "",
    department: "",
    prerequisite: ""
  };

  //yup validation rules for form
  const validationSchema = Yup.object({
    name: Yup.string("Enter the course name").required(
      "Course name is required"
    ),
    number: Yup.string("Enter the course number").required(
      "Course number is required"
    ),
    number: Yup.string("Enter the course level").required(
      "Course level is required"
    ),
    number: Yup.string("Enter the number of course credits").required(
      "Number of course credit is required"
    )
  });

  //apollo query hook for subjects
  const {
    data: { subjects }
  } = useQuery(GET_ALL_SUBJECTS, {
    suspend: true,
    variables: { orderBy: "name_ASC" }
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
    data: { departments }
  } = useQuery(GET_ALL_DEPARTMENTS, {
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
              number: values.number,
              level: values.level,
              credits: values.credits,
              subject: values.subject
                ? { connect: { id: values.subject } }
                : undefined,
              degree: values.degree
                ? { connect: { id: values.degree } }
                : undefined,
              department: values.department
                ? { connect: { id: values.department } }
                : undefined,
              prerequisite: values.prerequisite
                ? { connect: { id: values.prerequisite } }
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
          degrees={degrees}
          departments={departments}
          courses={courses}
          modal={modal}
          loading={loading}
          error={error}
        />
      )}
    </Formik>
  );
};

//main export
export default FormLogic;
