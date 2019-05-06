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
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShortTextIcon from "@material-ui/icons/ShortText";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";

//components
import DegreeBodyCourseListItem from "./DegreeBodyCourseListItem";
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
function DegreeBody(props) {
  //destructure props
  const { history, degree, coursesInDegree } = props;

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
            Degree Details
          </Typography>
        </CardContent>
        <List>
          <ListItem key={0} button>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <ShortTextIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Name" secondary={degree.name} />
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => toggleModal("editDegreeName")}
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
            <ListItemText primary="Degree ID" secondary={degree.id} />
          </ListItem>
          <Divider className={classes.divider} component="li" variant="inset" />
          <ListItem key={2} button>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <ConfirmationNumberIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Required Credits"
              secondary={degree.requiredCredits}
            />
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => toggleModal("editDegreeRequiredCredits")}
                edge="end"
                aria-label="Edit"
              >
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Card>
      <Card>
        <CardContent className={classes.contentHeader}>
          <Typography variant="h6" gutterBottom>
            Courses In {degree.name}
          </Typography>
        </CardContent>
        {coursesInDegree.length ? (
          <List>
            {coursesInDegree.map((course, i) => (
              <DegreeBodyCourseListItem
                key={course.id}
                course={course}
                hasDivider={coursesInDegree[i + 1] && true}
              />
            ))}
          </List>
        ) : (
          <EmptyState
            message="No courses in this degree"
            icon={<ListAltIcon />}
          />
        )}
      </Card>
    </div>
  );
}

//main export
export default withRouter(DegreeBody);
