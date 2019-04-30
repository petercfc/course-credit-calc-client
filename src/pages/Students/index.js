//other
import React from "react";

//apollo
import { useQuery } from "react-apollo-hooks";
import { GET_ALL_STUDENTS } from "../../apollo/queries";

//components
import StudentsView from "./components/StudentsView";
import Error from "../../components/Error";

//main function
function Students() {
  //apollo query hook
  const {
    data: { students },
    error
  } = useQuery(GET_ALL_STUDENTS, {
    suspend: true,
    variables: { orderBy: "name_ASC" }
  });

  //error return
  if (error) {
    return <Error message={error.message} />;
  }
  //main return
  return <StudentsView students={students} />;
}

//main export
export default Students;
