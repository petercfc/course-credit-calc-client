//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";

//material-ui styles hook
const useStyles = makeStyles(
  theme => ({
    root: {}
  }),
  { withTheme: true }
);

//main function
function Departments() {
  //material-ui styles hook
  const classes = useStyles();
  //main return
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <List className={classes.root}>
          <ListSubheader>Departments</ListSubheader>
        </List>
      </Card>
    </div>
  );
}

//main export
export default Departments;
