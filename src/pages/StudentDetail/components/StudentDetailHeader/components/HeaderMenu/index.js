//other
import React, { useState, useContext } from "react";
import { StudentDetailContext } from "../../../../context";

//material-ui
import { makeStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";

//components
import HeaderMenuEdit from "../HeaderMenuEdit";
import HeaderMenuDelete from "../HeaderMenuDelete";

//material-ui styles - custom hook
const useStyles = makeStyles(
  theme => ({
    button: {
      marginLeft: 20,
      marginRight: -12
    }
  }),
  { withTheme: true }
);

//main function
function HeaderMenu(props) {
  //use material-ui styles custom hook
  const classes = useStyles();

  //use context state hook
  const [state, setState] = useContext(StudentDetailContext);

  //destructure props
  const { student } = props;

  //menu open
  const handleOpenMenu = event => {
    setState(state => ({ ...state, anchorEl: event.currentTarget }));
  };

  //menu close
  const handleCloseMenu = () => {
    setState(state => ({ ...state, anchorEl: null }));
  };

  //menu open as bool
  const open = Boolean(state.anchorEl);

  //main return
  return (
    <React.Fragment>
      <IconButton className={classes.button} onClick={handleOpenMenu}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        className={classes.menuButton}
        id="menu-appbar"
        anchorEl={state.anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={open}
        onClose={handleCloseMenu}
      >
        <HeaderMenuEdit handleCloseMenu={handleCloseMenu} student={student} />
        <HeaderMenuDelete student={student} />
      </Menu>
    </React.Fragment>
  );
}

//main export
export default HeaderMenu;
