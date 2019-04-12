import { useState } from "react";

// apollo
import { UPDATE_STUDENT } from "../../../../../apollo/mutations";

import { useMutation } from "react-apollo-hooks";

const useForm = (callback, initValues) => {
  const [values, setValues] = useState({});

  const handleSubmit = event => {
    if (event) event.preventDefault();
    callback();
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
    console.log("event.target.value", event.target.value);
  };

  //update student mutation
  const updateStudent = event => {
    if (event) event.preventDefault();
    useMutation(UPDATE_STUDENT, {
      variables: {
        data: {
          enrolledDegree: { connect: { id: "cjt3olkyeh6ap0b76frk09haa" } }
        },
        where: { id: "cjubc4sjmgkek0b03qztplk4p" },
        refetchQueries: ["GET_STUDENT"]
      },
      update: () => {
        // toggleModal("editDegree");
        // navToNewStudent(student.id);
      }
    });
  };

  return {
    handleChange,
    handleSubmit,
    updateStudent,
    values
  };
};

export default useForm;
