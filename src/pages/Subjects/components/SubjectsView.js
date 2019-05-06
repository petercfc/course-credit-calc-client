//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";

//components
import SubjectListItem from "./SubjectListItem";
import CreateSubjectButton from "./CreateSubjectButton";
import CreateSubjectDialog from "./CreateSubjectDialog";

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
function SubjectsView(props) {
  //destructure props
  const { subjects } = props;

  //material-ui styles hook
  const classes = useStyles();

  //main return
  return (
    <React.Fragment>
      <Card>
        <CardContent className={classes.contentHeader}>
          <Typography variant="h6" gutterBottom>
            Subjects
          </Typography>
        </CardContent>
        <List>
          {subjects.map((subject, i) => (
            <SubjectListItem
              key={subject.id}
              subject={subject}
              hasDivider={subjects[i + 1] && true}
            />
          ))}
        </List>
      </Card>
      <CreateSubjectButton />
      <CreateSubjectDialog />
    </React.Fragment>
  );
}

//main export
export default SubjectsView;
