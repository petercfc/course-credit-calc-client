//other
import React, { useCallback } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

//redux
import { useDispatch } from "react-redux";
import { modalOperations } from "../../../../../redux/ducks/modal";

//components
import FormFields from "./FormFields";
import FormDialog from "./FormDialog";

//main function
const FormLogic = props => {
  //destructure props
  const { createDepartment, loading } = props;

  //redux hook actions
  const dispatch = useDispatch();
  const toggleModal = useCallback(
    () => dispatch(modalOperations.toggleModal("createDepartment")),
    []
  );

  //initial values for form
  const initialValues = {
    name: ""
  };

  //yup validation rules for form
  const validationSchema = Yup.object({
    name: Yup.string("Enter the department name").required(
      "Department name is required"
    )
  });

  //formik onSubmit handler
  const onSubmit = async (values, actions) => {
    await createDepartment({
      variables: {
        data: {
          name: values.name
        }
      }
    });
    actions.setSubmitting(false);
    actions.resetForm();
    toggleModal();
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
          <FormFields {...props} loading={loading} />
        </FormDialog>
      )}
    </Formik>
  );
};

//main export
export default FormLogic;
