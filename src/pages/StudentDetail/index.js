//other
import React, { useContext } from "react";
import { StudentDetailProvider } from "./context";

// apollo
import { Query } from "react-apollo";
import { GET_STUDENT } from "../../apollo/queries";

//material-ui
import PersonIcon from "@material-ui/icons/Person";

//components
import Header from "./components/Header";
import StudentDetailBody from "./components/StudentDetailBody";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import EmptyState from "../../components/EmptyState";

//get id from url
const getCurrentStudentId = props => {
  const { pathname } = props.location;
  const id = pathname.split("/")[2];
  return id.substr(1);
};

//main function
function StudentDetailsView(props) {
  //get the student id from the url pathname
  const studentId = getCurrentStudentId(props);
  //main return
  return (
    <StudentDetailProvider>
      <Query query={GET_STUDENT} variables={{ id: studentId }}>
        {({ loading, error, data: { student } }) => {
          if (loading) return <Loading isCircular />;
          if (error) return <Error message={error} />;
          return (
            <React.Fragment>
              {loading && <Loading />}
              {student ? (
                <React.Fragment>
                  <Header student={student} />
                  <StudentDetailBody student={student} />
                </React.Fragment>
              ) : (
                <EmptyState
                  message="This student does not exist."
                  icon={<PersonIcon />}
                />
              )}
            </React.Fragment>
          );
        }}
      </Query>
    </StudentDetailProvider>
  );
}

//main export
export default StudentDetailsView;
