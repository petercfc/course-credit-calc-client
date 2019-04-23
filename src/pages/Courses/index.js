//other
import React from "react";
import { withRouter } from "react-router-dom";

//apollo
import { useQuery } from "react-apollo-hooks";
import { GET_ALL_COURSES } from "../../apollo/queries";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListAltIcon from "@material-ui/icons/ListAlt";
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
function Courses(props) {
  //destructure props
  const { history } = props;

  //material-ui styles hook
  const classes = useStyles();

  //apollo query hook
  const {
    data: { courses },
    error
  } = useQuery(GET_ALL_COURSES, {
    suspend: true
  });

  //main return
  return (
    <Card>
      <List>
        <ListSubheader>Courses</ListSubheader>
        {courses.map(course => (
          <ListItem
            key={course.id}
            button
            onClick={() => history.push(`/courses/${course.id}`)}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <ListAltIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={course.name} secondary={course.id} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

//main export
export default withRouter(Courses);
