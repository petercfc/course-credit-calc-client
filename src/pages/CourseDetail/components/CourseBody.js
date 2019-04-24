//other
import React from "react";
import t from "typy"; // ES6 style import

//material-ui
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import blue from "@material-ui/core/colors/blue";
import EditIcon from "@material-ui/icons/Edit";

//components

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    root: { paddingTop: theme.spacing(6) },
    avatar: {
      backgroundColor: blue[100],
      color: blue[600]
    },
    contentHeader: {
      paddingBottom: 0
    },
    divider: {
      marginLeft: 72,
      marginRight: 16,
      borderBottom: `0.0625em solid rgba(0, 0, 0, 0.08);`,
      backgroundClip: "padding-box",
      backgroundColor: "transparent"
    }
  }),
  { withTheme: true }
);

//main function
function CourseBody(props) {
  //destructure props
  const { course } = props;

  //use material-ui styles - custom hook
  const classes = useStyles();

  //check for null
  const subjectName = t(course, "subject.name").safeString;
  const degreeName = t(course, "degree.name").safeString;
  const departmentName = t(course, "department.name").safeString;
  const prerequisiteName = t(course, "prerequisite.name").safeString;

  //main return
  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Description
          </Typography>
          <Typography variant="body1" gutterBottom>
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
      <Card>
        <CardContent className={classes.contentHeader}>
          <Typography variant="h6" gutterBottom>
            Details
          </Typography>
        </CardContent>
        <List>
          <ListItem button>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <EditIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Name" secondary={course.name} />
          </ListItem>
          <Divider className={classes.divider} component="li" variant="inset" />
          <ListItem button>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <EditIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Credits" secondary={course.credits} />
          </ListItem>
          <Divider className={classes.divider} component="li" variant="inset" />
          <ListItem button>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <EditIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Number" secondary={course.number} />
          </ListItem>
          <Divider className={classes.divider} component="li" variant="inset" />
          <ListItem button>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <EditIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Level" secondary={course.level} />
          </ListItem>
          <Divider className={classes.divider} component="li" variant="inset" />
          <ListItem button>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <EditIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Subject"
              secondary={subjectName || "None selected"}
            />
          </ListItem>
          <Divider className={classes.divider} component="li" variant="inset" />
          <ListItem button>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <EditIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Degree"
              secondary={degreeName || "None selected"}
            />
          </ListItem>
          <Divider className={classes.divider} component="li" variant="inset" />
          <ListItem button>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <EditIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Department"
              secondary={departmentName || "None selected"}
            />
          </ListItem>
          <Divider className={classes.divider} component="li" variant="inset" />
          <ListItem button>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <EditIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Prerequisite"
              secondary={prerequisiteName || "None selected"}
            />
          </ListItem>
        </List>
      </Card>
    </div>
  );
}

//main export
export default CourseBody;
