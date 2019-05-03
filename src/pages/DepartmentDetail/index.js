//other
import React from "react";

//apollo
import { useQuery } from "react-apollo-hooks";
import { GET_DEPARTMENT } from "../../apollo/queries";

//components
import DepartmentView from "./components/DepartmentView";
import Error from "../../components/Error";

//main function
function DepartmentDetail(props) {
  //destructure props
  const {
    match: { params }
  } = props;

  //apollo query hook
  const {
    data: { department },
    error
  } = useQuery(GET_DEPARTMENT, {
    suspend: true,
    variables: { id: params.id }
  });

  //error return
  if (error) {
    return <Error message={error.message} />;
  }

  // //main return
  return <DepartmentView department={department} />;
}

//main export
export default DepartmentDetail;
