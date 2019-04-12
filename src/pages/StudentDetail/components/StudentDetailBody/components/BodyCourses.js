//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemText from "@material-ui/core/ListItemText";

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
const BodyCourses = () => {
  //use material-ui styles - custom hook
  const classes = useStyles();

  //main return
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="body1" gutterBottom>
            Credits Passed
          </Typography>
          <List className={classes.root}>
            <ListSubheader>Courses Passed</ListSubheader>
            <ListItem>
              <ListItemText variant="body2">item</ListItemText>
            </ListItem>
          </List>
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
export default BodyCourses;
