//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";

//components
import HeaderMenuEdit from "./HeaderMenuEdit";
import HeaderMenuDelete from "./HeaderMenuDelete";

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
function HeaderMenu() {
  //use material-ui styles custom hook
  const classes = useStyles();

  //menu open
  const handleOpenMenu = event => {};

  //menu close
  const handleCloseMenu = event => {};

  //menu open as bool
  const isMenuOpen = false;

  //main return
  return (
    <React.Fragment>
      <IconButton className={classes.button} onClick={handleOpenMenu}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        className={classes.menuButton}
        id="menu-appbar"
        anchorEl={null}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={isMenuOpen}
        onClose={handleCloseMenu}
      >
        <HeaderMenuEdit />
        <HeaderMenuDelete />
      </Menu>
    </React.Fragment>
  );
}

//main export
export default HeaderMenu;
