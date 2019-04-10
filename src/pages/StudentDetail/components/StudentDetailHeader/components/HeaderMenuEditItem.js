//other
import React from "react";
import useStudentDetail from "../../../hooks/useStudentDetail";

//material-ui
import MenuItem from "@material-ui/core/MenuItem";

//main function
function HeaderMenuEditItem() {
  //use context state hook
  const { toggleModal } = useStudentDetail();
  //main return
  return (
    <MenuItem
      onClick={() => {
        toggleModal("editName");
      }}
    >
      Change Name
    </MenuItem>
  );
}

//main export
export default HeaderMenuEditItem;
