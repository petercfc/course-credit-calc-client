//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";

//components
import DepartmentListItem from "./DepartmentListItem";
import CreateDepartmentDialog from "./CreateDepartmentDialog";
import CreateDepartmentButton from "./CreateDepartmentButton";

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
function DepartmentsView(props) {
  //destructure props
  const { departments } = props;

  //material-ui styles hook
  const classes = useStyles();

  //main return
  return (
    <React.Fragment>
      <Card>
        <CardContent className={classes.contentHeader}>
          <Typography variant="h6" gutterBottom>
            Departments
          </Typography>
        </CardContent>
        <List>
          {departments.map((department, i) => (
            <DepartmentListItem
              key={department.id}
              department={department}
              hasDivider={departments[i + 1] && true}
            />
          ))}
        </List>
      </Card>
      <CreateDepartmentButton />
      <CreateDepartmentDialog />
    </React.Fragment>
  );
}

//main export
export default DepartmentsView;
