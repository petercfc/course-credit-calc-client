//other
import React from "react";
import { withRouter } from "react-router-dom";

//apollo
import { useQuery } from "react-apollo-hooks";
import { GET_ALL_SUBJECTS } from "../../apollo/queries";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import StorageIcon from "@material-ui/icons/Storage";
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
function Subjects(props) {
  //destructure props
  const { history } = props;

  //material-ui styles hook
  const classes = useStyles();

  //apollo query hook
  const {
    data: { subjects },
    error
  } = useQuery(GET_ALL_SUBJECTS, {
    suspend: true
  });

  //main return
  return (
    <Card>
      <List>
        <ListSubheader>Subjects</ListSubheader>
        {subjects.map(subject => (
          <ListItem
            key={subject.id}
            button
            onClick={() => history.push(`/subjects/${subject.id}`)}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <StorageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={subject.name} secondary={subject.id} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

//main export
export default withRouter(Subjects);
