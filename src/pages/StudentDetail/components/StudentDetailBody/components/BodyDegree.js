//other
import React from "react";
import useStudentDetail from "../../../hooks/useStudentDetail";

//material-ui
import { makeStyles } from "@material-ui/styles";
import SchoolIcon from "@material-ui/icons/School";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

//components
import EmptyState from "../../../../../components/EmptyState";
import BodyDegreeEdit from "./BodyDegreeEdit";

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
const BodyDegree = () => {
  //use material-ui styles - custom hook
  const classes = useStyles();
  //student detail state hook
  const { student } = useStudentDetail();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          {student && student.enrolledDegree ? (
            <React.Fragment>
              <Typography variant="body1" gutterBottom>
                Enrolled Degree - {student.enrolledDegree.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Required Credits - {student.enrolledDegree.requiredCredits}
              </Typography>
            </React.Fragment>
          ) : (
            <EmptyState
              message="This student is not enrolled in a degree."
              icon={<SchoolIcon />}
            />
          )}
        </CardContent>
        <CardActions className={classes.actions}>
          <BodyDegreeEdit />
        </CardActions>
      </Card>
    </div>
  );
};

//main export
export default BodyDegree;
