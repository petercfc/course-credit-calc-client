//other
import React from "react";

//material-ui
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";

//components
import StudentHeaderMenuDelete from "./StudentHeaderMenuDelete";

//main function
function StudentHeaderMenu(props) {
  //destructure props
  const { student } = props;

  //state hook fior menu anchor
  const [anchorEl, setAnchorEl] = React.useState(null);

  //handle menu click
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  //handle menu close
  function handleClose() {
    setAnchorEl(null);
  }

  //main return
  return (
    <div>
      <IconButton
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StudentHeaderMenuDelete student={student} handleClose={handleClose} />
      </Menu>
    </div>
  );
}

//main export
export default StudentHeaderMenu;
