//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

//components

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    root: { paddingTop: theme.spacing(6) }
  }),
  { withTheme: true }
);

//main function
function CourseBody(props) {
  //destructure props
  const { course } = props;
  console.log(course);
  //use material-ui styles - custom hook
  const classes = useStyles();

  //main return
  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque mi nulla, auctor id vestibulum vel, posuere a eros.
            Vivamus viverra et risus sed luctus. Cras auctor ligula ut ipsum
            condimentum, sit amet mattis felis fringilla. Suspendisse potenti.
            Proin pellentesque dui vel lacus tincidunt aliquam. Donec aliquet
            augue non tellus consectetur suscipit ac sed sapien. Curabitur
            commodo dui eu sagittis sagittis. Ut ac orci quis ipsum ornare
            dignissim vitae vitae tortor.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

//main export
export default CourseBody;
