//other
import React, { useState, useRef } from "react";

// apollo
import { Query } from "react-apollo";
import { GET_ALL_DEGREES } from "../../../../../../apollo/queries";

//material-ui
import { makeStyles } from "@material-ui/styles";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
function StudentDetailBodyDegreeEdit(props) {
  //destructure props
  const { handleChangeDegree } = props;

  //material-ui styles hook
  const classes = useStyles();
  //state hook
  const [degreeId, setDegreeId] = useState(null);
  const [labelWidth, setLabelWidth] = useState(0);

  //input ref hook
  const selectRef = useRef();

  //handle input change
  const handleChange = event => {
    let degree = event.target.value;
    setLabelWidth(selectRef.current.offsetWidth);
    setDegreeId(degree);
    handleChangeDegree(degree);
  };

  //main return
  return (
    <Query query={GET_ALL_DEGREES}>
      {({ data: { degrees } }) => (
        <React.Fragment>
          {degrees && (
            <div className={classes.root}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={selectRef} htmlFor="outlined-age-simple">
                  Degree
                </InputLabel>
                <Select
                  value={degreeId}
                  onChange={handleChange}
                  input={
                    <OutlinedInput
                      labelWidth={labelWidth}
                      name="age"
                      id="outlined-age-simple"
                    />
                  }
                >
                  {degrees.map(degree => (
                    <MenuItem key={degree.id} value={degree.id}>
                      {degree.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          )}
        </React.Fragment>
      )}
    </Query>
  );
}

//main export
export default StudentDetailBodyDegreeEdit;
