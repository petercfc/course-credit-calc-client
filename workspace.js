//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";

// apollo

//components

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    root: {}
  }),
  { withTheme: true }
);

//main function
const Thing = props => {
  //destructure props
  const { things } = props;

  //material-ui hook
  const classes = useStyles();

  //main
  return <div className={classes.root}>Hello World</div>;
};

//main export
export default Thing;

{
  /* <FormControl variant="outlined" className={classes.level}>
            <InputLabel ref={levelLabelRef} htmlFor="level-select">
              Level
            </InputLabel>
            <Field
              type="number"
              name="level"
              component={Select}
              required
              input={
                <OutlinedInput
                  labelWidth={levelLabelWidth}
                  name="level"
                  id="level-select"
                />
              }
              inputProps={{ name: "level", id: "level" }}
            >
              <MenuItem key="100" value={100}>
                100
              </MenuItem>
              <MenuItem key="200" value={200}>
                200
              </MenuItem>
              <MenuItem key="300" value={300}>
                300
              </MenuItem>
              <MenuItem key="400" value={400}>
                400
              </MenuItem>
            </Field>
          </FormControl> */
}
{
  /* <FormControl variant="outlined" className={classes.credits}>
            <InputLabel ref={creditsLabelRef} htmlFor="credits-select">
              Credits
            </InputLabel>
            <Field
              type="number"
              name="credits"
              component={Select}
              required
              input={
                <OutlinedInput
                  labelWidth={creditsLabelWidth}
                  name="credits"
                  id="credits-select"
                />
              }
              inputProps={{ name: "credits", id: "credits" }}
            >
              <MenuItem key="1" value={1}>
                1
              </MenuItem>
              <MenuItem key="2" value={2}>
                2
              </MenuItem>
              <MenuItem key="3" value={3}>
                3
              </MenuItem>
              <MenuItem key="4" value={4}>
                4
              </MenuItem>
              <MenuItem key="5" value={5}>
                5
              </MenuItem>
            </Field>
          </FormControl>
          <br />
          <FormControl fullWidth variant="outlined" className={classes.subject}>
            <InputLabel ref={subjectsLabelRef} htmlFor="subject-select">
              Subject
            </InputLabel>
            <Field
              type="text"
              name="subject"
              component={Select}
              input={
                <OutlinedInput
                  labelWidth={subjectsLabelWidth}
                  name="subject"
                  id="subject-select"
                />
              }
              inputProps={{ name: "subject", id: "subject" }}
            >
              <MenuItem key="0" value="">
                Select None
              </MenuItem>
              {subjects.map(subject => (
                <MenuItem key={subject.id} value={subject.id}>
                  {subject.name}
                </MenuItem>
              ))}
            </Field>
          </FormControl>
          <br />
          <FormControl fullWidth variant="outlined" className={classes.degree}>
            <InputLabel ref={degreesLabelRef} htmlFor="degree-select">
              Degree
            </InputLabel>
            <Field
              type="text"
              name="degree"
              component={Select}
              input={
                <OutlinedInput
                  labelWidth={degreesLabelWidth}
                  name="degree"
                  id="degree-select"
                />
              }
              inputProps={{ name: "degree", id: "degree" }}
            >
              <MenuItem key="0" value="">
                Select None
              </MenuItem>
              {degrees.map(degree => (
                <MenuItem key={degree.id} value={degree.id}>
                  {degree.name}
                </MenuItem>
              ))}
            </Field>
          </FormControl>
          <br />
          <FormControl
            fullWidth
            variant="outlined"
            className={classes.department}
          >
            <InputLabel ref={departmentsLabelRef} htmlFor="department-select">
              Department
            </InputLabel>
            <Field
              type="text"
              name="department"
              component={Select}
              input={
                <OutlinedInput
                  labelWidth={departmentsLabelWidth}
                  name="department"
                  id="department-select"
                />
              }
              inputProps={{ name: "department", id: "department" }}
            >
              <MenuItem key="0" value="">
                Select None
              </MenuItem>
              {departments.map(department => (
                <MenuItem key={department.id} value={department.id}>
                  {department.name}
                </MenuItem>
              ))}
            </Field>
          </FormControl>
          <br />
          <FormControl
            fullWidth
            variant="outlined"
            className={classes.prerequisite}
          >
            <InputLabel
              ref={prerequisitesLabelRef}
              htmlFor="prerequisite-select"
            >
              Prerequisite
            </InputLabel>
            <Field
              type="text"
              name="prerequisite"
              component={Select}
              input={
                <OutlinedInput
                  labelWidth={prerequisitesLabelWidth}
                  name="prerequisite"
                  id="prerequisite-select"
                />
              }
              inputProps={{ name: "prerequisite", id: "prerequisite" }}
            >
              <MenuItem key="0" value="">
                Select None
              </MenuItem>
              {courses.map(course => (
                <MenuItem key={course.id} value={course.id}>
                  {course.name}
                </MenuItem>
              ))}
            </Field>
          </FormControl> */
}
