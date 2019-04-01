//other
import React, { useState, useRef } from "react";

// apollo
import { Query } from "react-apollo";
import { GET_ALL_DEGREES, GET_ALL_COURSES } from "../../../../apollo/queries";

//material-ui
import { makeStyles } from "@material-ui/styles";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";

//components
import StudentDetailBodyCoursesEditDialogSort from "../StudentDetailBodyCoursesEditDialogSort";

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    root: {},
    actions: {
      justifyContent: "flex-end"
    },
    formControl: {
      // margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  }),
  { withTheme: true }
);

//main function
function StudentDetailBodyCoursesEditDialogSelect(props) {
  //destructure props
  const { handleChangeDegree } = props;

  //material-ui styles hook
  const classes = useStyles();
  //state hook
  const [degreeId, setDegreeId] = useState(null);

  //input ref hook
  const selectRef = useRef();

  //handle input change
  const handleChange = event => {
    let degree = event.target.value;
    setDegreeId(degree);
    handleChangeDegree(degree);
  };

  //main return
  return (
    <Query query={GET_ALL_COURSES}>
      {({ data: { courses } }) => (
        <React.Fragment>
          {courses && (
            <div className={classes.root}>
              <StudentDetailBodyCoursesEditDialogSort courses={courses} />
            </div>
          )}
        </React.Fragment>
      )}
    </Query>
  );
}

//main export
export default StudentDetailBodyCoursesEditDialogSelect;
