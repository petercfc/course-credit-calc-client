//other
import React from "react";
import { withRouter } from "react-router-dom";
import t from "typy"; // ES6 style import
import { compose } from "redux";

//redux
import { connect } from "react-redux";
import { modalOperations } from "../../../redux/ducks/modal";

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
import ListAltIcon from "@material-ui/icons/ListAlt";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import SchoolIcon from "@material-ui/icons/School";
import ShortTextIcon from "@material-ui/icons/ShortText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";

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
    },
    dividerFull: {
      marginLeft: 16,
      marginRight: 16,
      borderBottom: `0.0625em solid rgba(0, 0, 0, 0.08);`,
      backgroundClip: "padding-box",
      backgroundColor: "transparent"
    }
  }),
  { withTheme: true }
);

//main function
function StudentBody(props) {
  //destructure props
  const { history, student, toggleModal } = props;

  //use material-ui styles - custom hook
  const classes = useStyles();

  const creditsRequired = t(student, "enrolledDegree.requiredCredits")
    .safeNumber;
  const coursesPassed = t(student, "coursesPassed").safeObject;

  const creditsCompleted = () => {
    if (coursesPassed.length) {
      return coursesPassed.reduce((total, course) => {
        return total + course.credits;
      }, 0);
    }
    return 0;
  };

  const creditsRemaining = () => {
    return creditsRequired - creditsCompleted();
  };

  //main return
  return (
    <div className={classes.root}>
      <Card>
        <CardContent className={classes.contentHeader}>
          <Typography variant="h6" gutterBottom>
            Details
          </Typography>
        </CardContent>
        <List>
          <ListItem key={0} button>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <ShortTextIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Name" secondary={student.name} />
            <ListItemSecondaryAction>
              <IconButton
                onClick={() =>
                  toggleModal("editStudentName", { studentId: student.id })
                }
                edge="end"
                aria-label="Edit"
              >
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider className={classes.divider} component="li" variant="inset" />
          <ListItem key={1} button>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <AccountBalanceWalletIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Student ID" secondary={student.id} />
          </ListItem>
          <Divider className={classes.divider} component="li" variant="inset" />
          <ListItem
            key={2}
            button
            onClick={() =>
              history.push(`/degrees/${student.enrolledDegree.id}`)
            }
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <SchoolIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Enrolled Degree"
              secondary={
                t(student, "enrolledDegree.name").safeString ||
                "No enrolled degree"
              }
            />
          </ListItem>
        </List>
      </Card>
      <Card>
        <CardContent className={classes.contentHeader}>
          <Typography variant="h6" gutterBottom>
            Credits Calculator
          </Typography>
        </CardContent>
        <List>
          <ListItem key={0} button>
            <ListItemText
              primary="Credits Completed"
              secondary={creditsCompleted()}
            />
          </ListItem>
          <Divider
            className={classes.dividerFull}
            component="li"
            variant="inset"
          />
          <ListItem key={1} button>
            <ListItemText
              primary="Credits Required For Degree"
              secondary={creditsRequired}
            />
          </ListItem>
          <Divider
            className={classes.dividerFull}
            component="li"
            variant="inset"
          />
          <ListItem key={2} button>
            <ListItemText
              primary="Credits Remaining For Degree"
              secondary={creditsRemaining()}
            />
          </ListItem>
        </List>
      </Card>
      <Card>
        <CardContent className={classes.contentHeader}>
          <Typography variant="h6" gutterBottom>
            Courses Completed
          </Typography>
        </CardContent>
        <List>
          {student.coursesPassed.map((course, i) => (
            <ListItem
              key={course.id}
              className={classes.listItem}
              button
              onClick={() => history.push(`/courses/${course.id}`)}
            >
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <ListAltIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={course.name}
                secondary={
                  t(student, "enrolledDegree.name").safeString ||
                  "No enrolled degree"
                }
              />
            </ListItem>
          ))}
        </List>
      </Card>
      <Card>
        <CardContent className={classes.contentHeader}>
          <Typography variant="h6" gutterBottom>
            Required Courses Remaining
          </Typography>
        </CardContent>
        <List>
          {student.coursesPassed.map((course, i) => (
            <ListItem
              key={course.id}
              className={classes.listItem}
              button
              onClick={() => history.push(`/courses/${course.id}`)}
            >
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <ListAltIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={course.name}
                secondary={
                  t(student, "enrolledDegree.name").safeString ||
                  "No enrolled degree"
                }
              />
            </ListItem>
          ))}
        </List>
      </Card>
    </div>
  );
}

const mapDispatchToProps = {
  toggleModal: modalOperations.toggleModal
};

//main export
export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withRouter
)(StudentBody);
