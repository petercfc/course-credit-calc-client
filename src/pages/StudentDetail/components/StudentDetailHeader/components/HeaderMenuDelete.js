//other
import React from "react";
import { withRouter } from "react-router-dom";

// apollo
import { Mutation } from "react-apollo";
import { DELETE_STUDENT } from "../../../../../apollo/mutations";
import { GET_ALL_STUDENTS } from "../../../../../apollo/queries";

//material-ui
import { makeStyles } from "@material-ui/styles";
import MenuItem from "@material-ui/core/MenuItem";

// material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    menuItem: {}
  }),
  { withTheme: true }
);

//main function
function HeaderMenuDelete(props) {
  //destructure props
  const { student, history } = props;

  //use material-ui styles custom hook
  const classes = useStyles();

  //update cache on delete
  const update = (cache, { data: { deleteStudent } }) => {
    const { students } = cache.readQuery({ query: GET_ALL_STUDENTS });
    const compareId = deleteStudent.id;

    const result = students.filter(student => {
      const studentId = student.id;
      return studentId !== compareId;
    });
    try {
      cache.writeQuery({
        query: GET_ALL_STUDENTS,
        data: {
          students: result
        },
        variables: {
          id: compareId
        }
      });
    } catch (err) {
      console.log(err);
    }
    try {
      cache.data.delete(`Student:${compareId}`);
    } catch (err) {}
  };

  //main return
  return (
    <Mutation mutation={DELETE_STUDENT} update={update}>
      {(deleteStudent, { data }) => (
        <MenuItem
          className={classes.menuItem}
          color="secondary"
          onClick={async () => {
            await deleteStudent({
              variables: { id: student.id }
            });
            history.push("/students");
          }}
        >
          Delete Student
        </MenuItem>
      )}
    </Mutation>
  );
}

//main export - with router HOC
export default withRouter(HeaderMenuDelete);
