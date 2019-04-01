//other
import React, { useState } from "react";

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
  const [anchorEl, setAnchorEl] = useState(null);
  const { student } = props;

  const handleOpenMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  //main return
  return (
    <React.Fragment>
      <IconButton className={classes.button} onClick={handleOpenMenu}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        className={classes.menuButton}
        id="menu-appbar"
        anchorEl={anchorEl}
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
