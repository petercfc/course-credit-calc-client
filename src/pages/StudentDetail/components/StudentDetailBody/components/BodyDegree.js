//other
import React from "react";

//redux
import { connect } from "react-redux";
import { modalOperations } from "../../../../../redux/ducks/modal";
import { makeGetModalState } from "../../../../../redux/ducks/modal/selectors";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

//components
import EditStudentName from "../../../../../components/EditStudentName";

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    root: {},
    actions: {
      justifyContent: "flex-end"
    }
  }),
  { withTheme: true }
);

//main function
const BodyDegree = props => {
  //destructure props
  const { student, toggleModal } = props;
  //material-ui hook
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="body1" gutterBottom>
            Enrolled Degree
          </Typography>
          <Typography variant="body1" gutterBottom>
            Required Credits
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            onClick={() =>
              toggleModal("editStudentName", { studentId: student.studentId })
            }
          >
            Edit Student
          </Button>
        </CardActions>
      </Card>
      <EditStudentName student={student} modalType="editStudentName" />
    </div>
  );
};

const mapDispatchToProps = {
  toggleModal: modalOperations.toggleModal
};

//main export
export default connect(
  null,
  mapDispatchToProps
)(BodyDegree);
