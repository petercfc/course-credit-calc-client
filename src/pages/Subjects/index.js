//other
import React from "react";

//apollo
import { useQuery } from "react-apollo-hooks";
import { GET_ALL_SUBJECTS } from "apollo/queries";

//components
import SubjectsView from "./components/SubjectsView";
import Error from "components/Error";

//main function
function Subjects() {
  //apollo query hook
  const {
    data: { subjects },
    error
  } = useQuery(GET_ALL_SUBJECTS, {
    suspend: true,
    variables: { orderBy: "name_ASC" }
  });

  //error return
  if (error) {
    return <Error message={error.message} />;
  }
  //main return
  return <SubjectsView subjects={subjects} />;
}

//main export
export default Subjects;
