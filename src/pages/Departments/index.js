//other
import React from "react";

//apollo
import { useQuery } from "react-apollo-hooks";
import { GET_ALL_DEPARTMENTS } from "apollo/queries";

//components
import DepartmentsView from "./components/DepartmentsView";
import Error from "components/Error";

//main function
function Departments() {
  //apollo query hook
  const {
    data: { departments },
    error
  } = useQuery(GET_ALL_DEPARTMENTS, {
    suspend: true,
    variables: { orderBy: "name_ASC" }
  });

  //error return
  if (error) {
    return <Error message={error.message} />;
  }
  //main return
  return <DepartmentsView departments={departments} />;
}

//main export
export default Departments;
