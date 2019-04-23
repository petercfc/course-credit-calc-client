//other
import React from "react";

// apollo
import { Query } from "react-apollo";
import { GET_ALL_STUDENTS } from "../../apollo/queries";

//material-ui
import { makeStyles } from "@material-ui/styles";

//components
import CreateStudentButton from "./components/CreateStudentButton";
import StudentsBodyList from "./components/StudentsBodyList";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

//create material-ui styles custom hook
const useStyles = makeStyles(
  theme => ({
    root: {}
  }),
  { withTheme: true }
);

//main function
function Courses() {
  //material-ui styles custom hook
  const classes = useStyles();
  //main return
  return (
    <Query query={GET_ALL_STUDENTS}>
      {({ loading, error, data }) => {
        if (loading) return <Loading isCircular />;
        if (error) return <Error message={error} />;
        return (
          <div className={classes.root}>
            <StudentsBodyList students={data.students} />
            <CreateStudentButton />
          </div>
        );
      }}
    </Query>
  );
}

//main export
export default Courses;
