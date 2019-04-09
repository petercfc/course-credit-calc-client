//other
import React from "react";
import useStudentDetail from "../../../hooks/useStudentDetail";

//material-ui
import MenuItem from "@material-ui/core/MenuItem";

//main function
function HeaderMenuEditItem() {
  //use context state hook
  const { editNameModalToggle } = useStudentDetail();
  //main return
  return (
    <MenuItem
      onClick={() => {
        editNameModalToggle();
      }}
    >
      Change Name
    </MenuItem>
  );
}

//main export
export default HeaderMenuEditItem;
