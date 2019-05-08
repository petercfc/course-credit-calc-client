//other
import React, { useCallback } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

//redux
import { useDispatch } from "react-redux";
import { modalOperations } from "redux/ducks/modal";

import { useQuery } from "react-apollo-hooks";
import { GET_ALL_COURSES } from "apollo/queries";

//components
import FormFields from "./FormFields";
import FormDialog from "./FormDialog";
import StudentBody from "../../StudentBody";

//main function
const FormLogic = props => {
  //destructure props
  const { updateStudent, loading, student } = props;

  //redux hook actions
  const dispatch = useDispatch();
  const toggleModal = useCallback(
    () => dispatch(modalOperations.toggleModal("editStudentCoursesCompleted")),
    []
  );

  //initial values for form
  const initialValues = {
    coursesPassed: []
  };

  //yup validation rules for form
  const validationSchema = Yup.object({});

  //apollo query hook for courses
  const {
    data: { courses }
  } = useQuery(GET_ALL_COURSES, {
    suspend: true,
    variables: { orderBy: "name_ASC" }
  });

  //formik onSubmit handler
  const onSubmit = async (values, actions) => {
    await updateStudent({
      variables: {
        data: {
          coursesPassed: values.coursesPassed
            ? {
                set: values.coursesPassed.map(course => ({
                  id: course.id
                }))
              }
            : undefined
        },
        where: {
          id: student.id
        }
      }
    });
    console.log("submit", values);
    await actions.setSubmitting(false);
    await actions.resetForm();
    await toggleModal();
  };

  //main return
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {props => (
        <FormDialog>
          <FormFields {...props} loading={loading} courses={courses} />
        </FormDialog>
      )}
    </Formik>
  );
};

//main export
export default FormLogic;
