//other
import React, { useState, useRef } from "react";
import { Field, Form } from "formik";
import { TextField, Select } from "formik-material-ui";
import classNames from "classnames";

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

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    root: {
      flexGrow: 1
    },
    appBar: {
      paddingTop: 0,
      paddingBottom: 0,
      backgroundColor: theme.palette.background.paper,
      borderTopLeftRadius: theme.spacing(2),
      borderTopRightRadius: theme.spacing(2)
      // position: "fixed",
      // top: 4
    },
    progressBar: {
      borderTopLeftRadius: theme.spacing(2),
      borderTopRightRadius: theme.spacing(2)
    },
    toolBar: {
      paddingTop: 8,
      paddingBottom: 12
    },
    backButton: {
      marginLeft: -12,
      marginRight: 20
    },
    submitButton: {
      // borderRadius: 4
    },
    title: {
      flexGrow: 1
    },
    dialog: {
      paddingTop: theme.spacing(3),
      maxHeight: "-webkit-fill-available"
    },
    dialogTitle: {
      // paddingTop: 16,
      boxShadow: "none",
      paddingBottom: 0
      // borderBottom: "1px solid rgba(0,0,0,.12)"
    },
    content: { paddingTop: 64, paddingLeft: 16, paddingRight: 16 },
    paperFullScreen: {
      borderTopLeftRadius: theme.spacing(2),
      borderTopRightRadius: theme.spacing(2)
    },
    number: {
      minWidth: 140,
      marginTop: theme.spacing(2),
      marginRight: theme.spacing(1)
    },
    name: {
      minWidth: 140,
      marginTop: theme.spacing(2),
      marginRight: theme.spacing(1)
    },
    prerequisite: {
      minWidth: 140,
      marginTop: theme.spacing(2),
      marginRight: theme.spacing(1)
    },
    department: {
      minWidth: 140,
      marginTop: theme.spacing(2),
      marginRight: theme.spacing(1)
    },
    degree: {
      minWidth: 140,
      marginTop: theme.spacing(2),
      marginRight: theme.spacing(1)
    },
    level: {
      minWidth: 140,
      marginTop: theme.spacing(2),
      marginRight: theme.spacing(1)
    },
    credits: {
      minWidth: 140,
      marginTop: theme.spacing(2),
      marginRight: theme.spacing(1)
    },
    subject: {
      minWidth: 140,
      marginTop: theme.spacing(2),
      marginRight: theme.spacing(1)
    }
  }),
  { withTheme: true }
);

//transition component
function Transition(props) {
  return <Slide direction="up" {...props} />;
}

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
    modal,
    loading,
    error
  } = props;

  //use material-ui styles - custom hook
  const classes = useStyles();

  //ref hook for input labels
  const levelLabelRef = useRef(null);
  const creditsLabelRef = useRef(null);
  const subjectsLabelRef = useRef(null);
  const degreesLabelRef = useRef(null);
  const departmentsLabelRef = useRef(null);
  const prerequisitesLabelRef = useRef(null);

  //state hook for input labels
  const [levelLabelWidth, setLevelLabelWidth] = useState(0);
  const [creditsLabelWidth, setCreditsLabelWidth] = useState(0);
  const [subjectsLabelWidth, setSubjectsLabelWidth] = useState(0);
  const [degreesLabelWidth, setDegreesLabelWidth] = useState(0);
  const [departmentsLabelWidth, setDepartmentsLabelWidth] = useState(0);
  const [prerequisitesLabelWidth, setPreqrequisitesLabelWidth] = useState(0);

  //effect hook
  React.useEffect(() => {
    // setLevelLabelWidth(levelLabelRef.current.offsetWidth);
    // setCreditsLabelWidth(creditsLabelRef.current.offsetWidth);
    // setSubjectsLabelWidth(subjectsLabelRef.current.offsetWidth);
    // setDegreesLabelWidth(degreesLabelRef.current.offsetWidth);
    // setDepartmentsLabelWidth(departmentsLabelRef.current.offsetWidth);
    // setPreqrequisitesLabelWidth(prerequisitesLabelRef.current.offsetWidth);
  }, []);

  //state hook for input labels
  const [headerScrollBar, setHeaderScrollBar] = useState(false);

  function precise(x) {
    return Number.parseFloat(x).toPrecision(3);
  }

  const handleScroll = e => {
    console.log(element);
    let element = e.target;
    if (element.scrollTop != 0) {
      setHeaderScrollBar(true);
    } else {
      setHeaderScrollBar(false);
    }
  };

  //main
  return (
    <Dialog
      className={classes.dialog}
      classes={{
        paperFullScreen: classes.paperFullScreen
      }}
      fullScreen
      scroll="paper"
      TransitionComponent={Transition}
      open={modal.isOpen}
      onClose={handleDialogClose}
      onScroll={handleScroll}
    >
      <Form autoComplete="off">
        <AppBar
          className={classes.appBar}
          elevation={headerScrollBar ? 2 : 0}
          color="default"
        >
          <Toolbar className={classes.toolBar}>
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
              className={classes.submitButton}
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

          <FormControl variant="outlined" className={classes.level}>
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
          </FormControl>
          <FormControl variant="outlined" className={classes.credits}>
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
          </FormControl>
        </DialogContent>
      </Form>
    </Dialog>
  );
};

//main export
export default FormFields;
