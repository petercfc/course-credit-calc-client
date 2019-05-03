//other
import React, { useCallback } from "react";
import { Field, Form } from "formik";
import { TextField } from "formik-material-ui";

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
  const { isValid, loading, isScrolled } = props;

  //use material-ui styles - custom hook
  const classes = useStyles();

  //redux hook actions
  const dispatch = useDispatch();
  const toggleModal = useCallback(
    () => dispatch(modalOperations.toggleModal("createDepartment")),
    []
  );

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
            Create Department
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
      </DialogContent>
    </Form>
  );
};

//main export
export default FormFields;
