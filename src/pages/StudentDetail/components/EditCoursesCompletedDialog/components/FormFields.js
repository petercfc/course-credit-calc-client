//other
import React, { useCallback, useState, useRef } from "react";
import { Field, Form } from "formik";
import { TextField, Select } from "formik-material-ui";
import t from "typy"; // ES6 st

//redux
import { useDispatch } from "react-redux";
import { modalOperations } from "../../../../../redux/ducks/modal";

//material-ui
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import Loading from "../../../../../components/Loading/index";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    appBar: {
      backgroundColor: theme.palette.background.paper,
      borderTopLeftRadius: theme.spacing(2),
      borderTopRightRadius: theme.spacing(2)
    },
    toolBar: {
      paddingTop: 8,
      paddingBottom: 8
    },
    progressBar: {
      marginTop: -4
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
      marginTop: theme.spacing(3)
    },
    name: {
      marginTop: theme.spacing(3)
    },
    formControl: {
      marginTop: theme.spacing(3),
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
  const { values, courses, isValid, loading, isScrolled } = props;

  //use material-ui styles - custom hook
  const classes = useStyles();

  //redux hook actions
  const dispatch = useDispatch();
  const toggleModal = useCallback(
    () => dispatch(modalOperations.toggleModal("editStudentCoursesCompleted")),
    []
  );

  //input level setup
  const coursesPassedLabel = React.useRef(null);
  const [coursesPassedWidth, setCoursesPassedWidth] = React.useState(0);
  React.useEffect(() => {
    setCoursesPassedWidth(coursesPassedLabel.current.offsetWidth);
  }, []);

  //main
  return (
    <Form autoComplete="off">
      <AppBar
        className={classes.appBar}
        elevation={isScrolled ? 2 : 0}
        color="default"
      >
        <Toolbar className={classes.toolBar}>
          <IconButton
            className={classes.backButton}
            onClick={toggleModal}
            aria-label="Close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            Edit Courses Completed
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

      <DialogContent className={classes.content}>
        <FormControl
          fullWidth
          variant="outlined"
          className={classes.formControl}
        >
          <InputLabel ref={coursesPassedLabel} htmlFor="coursesPassed-select">
            Courses Passed
          </InputLabel>
          <Field
            type="text"
            name="coursesPassed"
            component={Select}
            required
            multiple
            renderValue={selected => selected.map(e => e.name).join(",")}
            input={
              <OutlinedInput
                labelWidth={coursesPassedWidth}
                name="coursesPassed"
                id="coursesPassed-select"
              />
            }
            inputProps={{ name: "coursesPassed", id: "coursesPassed-select" }}
          >
            {courses.map(course => (
              <MenuItem key={course.id} value={course}>
                <Checkbox
                  color="primary"
                  checked={
                    t(values.coursesPassed.find(e => e.id === course.id))
                      .isDefined
                  }
                />
                <ListItemText primary={course.name} />
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
