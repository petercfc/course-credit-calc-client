//other
import React from "react";

//material-ui
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

//components
import CourseHeaderMenuDelete from "./CourseHeaderMenuDelete";

//main function
function DegreeHeaderMenu(props) {
  //destructure props
  const { course } = props;

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
        <MenuItem color="secondary">Foo</MenuItem>
        <MenuItem color="secondary">Bar</MenuItem>
        <CourseHeaderMenuDelete course={course} handleClose={handleClose} />
      </Menu>
    </div>
  );
}

//main export
export default DegreeHeaderMenu;
