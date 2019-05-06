//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";

//components
import DegreeListItem from "./DegreeListItem";
import CreateDegreeButton from "./CreateDegreeButton";
import CreateDegreeDialog from "./CreateDegreeDialog";

//material-ui styles hook
const useStyles = makeStyles(
  theme => ({
    contentHeader: {
      paddingBottom: 0
    }
  }),
  { withTheme: true }
);

//main function
function DegreesView(props) {
  //destructure props
  const { degrees } = props;

  //material-ui styles hook
  const classes = useStyles();

  //main return
  return (
    <React.Fragment>
      <Card>
        <CardContent className={classes.contentHeader}>
          <Typography variant="h6" gutterBottom>
            Degrees
          </Typography>
        </CardContent>
        <List>
          {degrees.map((degree, i) => (
            <DegreeListItem
              key={degree.id}
              degree={degree}
              hasDivider={degrees[i + 1] && true}
            />
          ))}
        </List>
      </Card>
      <CreateDegreeButton />
      <CreateDegreeDialog />
    </React.Fragment>
  );
}

//main export
export default DegreesView;
