//other
import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";

//redux
import { useSelector, useDispatch } from "react-redux";
import { getModal } from "../../../redux/ducks/modal/selectors";
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
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import ShortTextIcon from "@material-ui/icons/ShortText";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import DomainIcon from "@material-ui/icons/Domain";
import StorageIcon from "@material-ui/icons/Storage";
import ListAltIcon from "@material-ui/icons/ListAlt";
import SchoolIcon from "@material-ui/icons/School";

//components
import EmptyState from "components/EmptyState";

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
  const { history, course } = props;

  //use material-ui styles - custom hook
  const classes = useStyles();

  //redux hooks selectors
  const modal = useSelector(state => getModal(state, "createDegree"));

  //redux hook actions
  const dispatch = useDispatch();
  const toggleModal = useCallback(
    modalType => dispatch(modalOperations.toggleModal(modalType)),
    []
  );

  //main return
  return (
    <div className={classes.root}>
      <Card>
        <CardContent className={classes.contentHeader}>
          <Typography variant="h6" gutterBottom>
            Course Details
          </Typography>
        </CardContent>
        <List>
          <ListItem key={0} button>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <ShortTextIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Name" secondary={course.name} />
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => toggleModal("editCourseName")}
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
            <ListItemText primary="Course ID" secondary={course.id} />
          </ListItem>
          <Divider className={classes.divider} component="li" variant="inset" />
          <ListItem key={2} button>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <FormatListNumberedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Level" secondary={course.level} />
          </ListItem>
          <Divider className={classes.divider} component="li" variant="inset" />
          <ListItem key={3} button>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <ConfirmationNumberIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Credits" secondary={course.credits} />
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => toggleModal("editCourseCredits")}
                edge="end"
                aria-label="Edit"
              >
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider className={classes.divider} component="li" variant="inset" />
          <ListItem
            key={4}
            button
            onClick={() => {
              if (course.department) {
                history.push(`/departments/${course.department.id}`);
              }
            }}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <DomainIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Department"
              secondary={
                course.department
                  ? course.department.name
                  : "No department selected"
              }
            />
          </ListItem>
          <Divider className={classes.divider} component="li" variant="inset" />
          <ListItem
            key={5}
            button
            onClick={() => {
              if (course.subject) {
                history.push(`/subjects/${course.subject.id}`);
              }
            }}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <StorageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Subject"
              secondary={
                course.subject ? course.subject.name : "No subject selected"
              }
            />
          </ListItem>
          <Divider className={classes.divider} component="li" variant="inset" />
          <ListItem
            key={6}
            button
            onClick={() => {
              if (course.degree) {
                history.push(`/degrees/${course.degree.id}`);
              }
            }}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <SchoolIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Degree"
              secondary={
                course.degree ? course.degree.name : "No degree selected"
              }
            />
          </ListItem>
          <Divider className={classes.divider} component="li" variant="inset" />
          <ListItem
            key={7}
            button
            onClick={() => {
              if (course.prerequisite) {
                history.push(`/courses/${course.prerequisite.id}`);
              }
            }}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <ListAltIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Prerequisite"
              secondary={
                course.prerequisite
                  ? course.prerequisite.name
                  : "No prerequisite selected"
              }
            />
          </ListItem>
        </List>
      </Card>
    </div>
  );
}

//main export
export default withRouter(CourseBody);
