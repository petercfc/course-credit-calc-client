//other
import React, { useCallback } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

//redux
import { useDispatch } from "react-redux";
import { modalOperations } from "redux/ducks/modal";

import { useQuery } from "react-apollo-hooks";
import { GET_ALL_DEGREES } from "apollo/queries";

//components
import FormFields from "./FormFields";
import FormDialog from "./FormDialog";

//main function
const FormLogic = props => {
  //destructure props
  const { updateStudent, loading, student } = props;

  //redux hook actions
  const dispatch = useDispatch();
  const toggleModal = useCallback(
    () => dispatch(modalOperations.toggleModal("editStudentEnrolledDegree")),
    []
  );

  //apollo query hook for courses
  const {
    data: { degrees }
  } = useQuery(GET_ALL_DEGREES, {
    suspend: true,
    variables: { orderBy: "name_ASC" }
  });

  //initial values for form
  const initialValues = {
    enrolledDegree: student.enrolledDegree
  };

  //yup validation rules for form
  const validationSchema = Yup.object({});

  //formik onSubmit handler
  const onSubmit = async (values, actions) => {
    await updateStudent({
      variables: {
        data: {
          enrolledDegree: {
            connect: {
              id: values.enrolledDegree.id
            }
          }
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
          <FormFields {...props} loading={loading} degrees={degrees} />
        </FormDialog>
      )}
    </Formik>
  );
};

//main export
export default FormLogic;
