//other
import React from "react";
import { withRouter } from "react-router-dom";

//apollo
import { useQuery } from "react-apollo-hooks";
import { GET_ALL_DEPARTMENTS } from "../../apollo/queries";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import DomainIcon from "@material-ui/icons/Domain";
import blue from "@material-ui/core/colors/blue";
import Avatar from "@material-ui/core/Avatar";

//material-ui styles hook
const useStyles = makeStyles(
  theme => ({
    root: {},
    avatar: {
      backgroundColor: blue[100],
      color: blue[600]
    }
  }),
  { withTheme: true }
);

//main function
function Departments(props) {
  //destructure props
  const { history } = props;

  //material-ui styles hook
  const classes = useStyles();

  //apollo query hook
  const {
    data: { departments },
    error
  } = useQuery(GET_ALL_DEPARTMENTS, {
    suspend: true
  });

  //main return
  return (
    <Card>
      <List>
        <ListSubheader>Departments</ListSubheader>
        {departments.map(department => (
          <ListItem
            key={department.id}
            button
            onClick={() => history.push(`/departments/${department.id}`)}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <DomainIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={department.name} secondary={department.id} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

//main export
export default withRouter(Departments);
