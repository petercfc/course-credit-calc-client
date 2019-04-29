//other
import React, { useState, useRef } from "react";
import { Field, Form } from "formik";
import { TextField, Select } from "formik-material-ui";
import t from "typy"; // ES6 style import

//material-ui
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import DialogTitle from "@material-ui/core/DialogTitle";
import Loading from "../../../../../components/Loading/index";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    appBar: {
      paddingTop: 8,
      paddingBottom: 8,
      backgroundColor: theme.palette.background.paper,
      borderTopLeftRadius: theme.spacing(2),
      borderTopRightRadius: theme.spacing(2)
    },
    progressBar: {
      paddingTop: 4
    },
    content: {
      paddingTop: 64,
      paddingLeft: 16,
      paddingRight: 16
    },

    backButton: {
      marginLeft: -12,
      marginRight: 20
    },
    title: {
      flexGrow: 1
    },
    number: {
      marginTop: theme.spacing(2)
    },
    name: {
      marginTop: theme.spacing(2)
    },
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 120
    },
    divider: {
      marginLeft: 64,
      marginRight: 16,
      borderBottom: `0.0625em solid rgba(0, 0, 0, 0.08);`,
      backgroundClip: "padding-box",
      backgroundColor: "transparent"
    }
  }),
  { withTheme: true }
);

//main function
const FormFields = props => {
  //destructure props
  const {
    isValid,
    handleDialogClose,
    subjects,
    degrees,
    departments,
    courses,
    loading,
    error,
    isScrolled
  } = props;

  //use material-ui styles - custom hook
  const classes = useStyles();

  //input level setup
  const levelLabel = React.useRef(null);
  const [levelWidth, setLevelWidth] = React.useState(0);
  React.useEffect(() => {
    setLevelWidth(levelLabel.current.offsetWidth);
  }, []);

  //input level setup
  const creditsLabel = React.useRef(null);
  const [creditsWidth, setCreditsWidth] = React.useState(0);
  React.useEffect(() => {
    setCreditsWidth(creditsLabel.current.offsetWidth);
  }, []);

  //input level setup
  const subjectsLabel = React.useRef(null);
  const [subjectsWidth, setSubjectsWidth] = React.useState(0);
  React.useEffect(() => {
    setSubjectsWidth(subjectsLabel.current.offsetWidth);
  }, []);

  //input level setup
  const degreesLabel = React.useRef(null);
  const [degreesWidth, setDegreesWidth] = React.useState(0);
  React.useEffect(() => {
    setDegreesWidth(degreesLabel.current.offsetWidth);
  }, []);

  //input level setup
  const departmentsLabel = React.useRef(null);
  const [departmentsWidth, setDepartmentsWidth] = React.useState(0);
  React.useEffect(() => {
    setDepartmentsWidth(departmentsLabel.current.offsetWidth);
  }, []);

  //input level setup
  const prerequisitesLabel = React.useRef(null);
  const [prerequisitesWidth, setPrerequisitesWidth] = React.useState(0);
  React.useEffect(() => {
    setPrerequisitesWidth(prerequisitesLabel.current.offsetWidth);
  }, []);
  //main
  return (
    <Form autoComplete="off">
      <AppBar
        className={classes.appBar}
        elevation={isScrolled ? 2 : 0}
        color="default"
      >
        <Toolbar>
          <IconButton
            className={classes.backButton}
            onClick={handleDialogClose}
            aria-label="Close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            Create Course
          </Typography>
          <Button
            variant="contained"
            type="submit"
            disabled={!isValid}
            color="primary"
          >
            Save
          </Button>
        </Toolbar>
        {loading && <Loading className={classes.progressBar} />}
      </AppBar>
      <Loading className={classes.progressBar} />
      <DialogContent className={classes.content}>
        <Field
          className={classes.name}
          type="text"
          name="name"
          label="Name"
          component={TextField}
          variant="outlined"
          fullWidth
          required
          autoFocus
        />
        <Field
          className={classes.number}
          type="text"
          name="number"
          label="Number"
          component={TextField}
          variant="outlined"
          fullWidth
          required
        />
        <FormControl
          fullWidth
          variant="outlined"
          className={classes.formControl}
        >
          <InputLabel ref={levelLabel} htmlFor="level-select">
            Credits
          </InputLabel>
          <Field
            type="number"
            name="level"
            component={Select}
            required
            input={
              <OutlinedInput
                labelWidth={levelWidth}
                name="level"
                id="level-select"
              />
            }
            inputProps={{ name: "level", id: "level-select" }}
          >
            <MenuItem key="1" value={100}>
              100
            </MenuItem>
            <MenuItem key="2" value={200}>
              200
            </MenuItem>
            <MenuItem key="3" value={300}>
              300
            </MenuItem>
            <MenuItem key="4" value={400}>
              400
            </MenuItem>
          </Field>
        </FormControl>
        <br />
        <FormControl
          fullWidth
          variant="outlined"
          className={classes.formControl}
        >
          <InputLabel ref={creditsLabel} htmlFor="credits-select">
            Credits
          </InputLabel>
          <Field
            type="number"
            name="credits"
            component={Select}
            required
            input={
              <OutlinedInput
                labelWidth={creditsWidth}
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
        <FormControl
          fullWidth
          variant="outlined"
          className={classes.formControl}
        >
          <InputLabel ref={subjectsLabel} htmlFor="subject-select">
            Subject
          </InputLabel>
          <Field
            type="text"
            name="subject"
            component={Select}
            input={
              <OutlinedInput
                labelWidth={subjectsWidth}
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
        <FormControl
          fullWidth
          variant="outlined"
          className={classes.formControl}
        >
          <InputLabel ref={degreesLabel} htmlFor="degree-select">
            Degree
          </InputLabel>
          <Field
            type="text"
            name="degree"
            component={Select}
            input={
              <OutlinedInput
                labelWidth={degreesWidth}
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
          className={classes.formControl}
        >
          <InputLabel ref={departmentsLabel} htmlFor="department-select">
            Department
          </InputLabel>
          <Field
            type="text"
            name="department"
            component={Select}
            input={
              <OutlinedInput
                labelWidth={departmentsWidth}
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
          className={classes.formControl}
        >
          <InputLabel ref={prerequisitesLabel} htmlFor="prerequisite-select">
            Prerequisite
          </InputLabel>
          <Field
            type="text"
            name="prerequisite"
            component={Select}
            input={
              <OutlinedInput
                labelWidth={prerequisitesWidth}
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
        </FormControl>
      </DialogContent>
    </Form>
  );
};

//main export
export default FormFields;
