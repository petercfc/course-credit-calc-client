//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

//components

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
          <Typography variant="body1" gutterBottom>
            Button
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
};

//main export
export default BodyDegree;
