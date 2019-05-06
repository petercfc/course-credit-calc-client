//other
import React from "react";

//apollo
import { useQuery } from "react-apollo-hooks";
import { GET_ALL_DEGREES } from "apollo/queries";

//components
import DegreesView from "./components/DegreesView";
import Error from "components/Error";

//main function
function Degrees() {
  //apollo query hook
  const {
    data: { degrees },
    error
  } = useQuery(GET_ALL_DEGREES, {
    suspend: true,
    variables: { orderBy: "name_ASC" }
  });

  //error return
  if (error) {
    return <Error message={error.message} />;
  }
  //main return
  return <DegreesView degrees={degrees} />;
}

//main export
export default Degrees;
