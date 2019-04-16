//other
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

//apollo
import { Mutation } from "react-apollo";
import { UPDATE_STUDENT } from "../../../apollo/mutations";

//components
import FormFields from "./FormFields";
import { fromPromise } from "apollo-link";

//main function
const FormLogic = props => {
  //destructure props
  const { handleDialogClose } = props;

  //yup validation rules for form
  const validationSchema = Yup.object({
    name: Yup.string("Enter a name").required("Name is required")
  });

  //initial values for form
  const initialValues = { name: "" };

  //main
  return (
    <Mutation
      mutation={UPDATE_STUDENT}
      variables={{
        data: {
          enrolledDegree: { connect: { id: "cjt3ollexr8a60b35ub0kdrm8" } }
        },
        where: { id: "cjubc4sjmgkek0b03qztplk4p" }
      }}
    >
      {(updateStudent, { data }) => (
        <Formik
          onSubmit={async (values, actions) => {
            // You can access the signup mutation in here now
            // You can access values.name, values.email, values.password
            updateStudent();
            actions.setSubmitting(false);
            handleDialogClose();
          }}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {props => (
            <FormFields {...props} handleDialogClose={handleDialogClose} />
          )}
        </Formik>
      )}
    </Mutation>
  );
};

//main export
export default FormLogic;
