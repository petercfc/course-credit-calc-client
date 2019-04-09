//other
import React from "react";

//components
import HeaderMenuEditItem from "./HeaderMenuEditItem";
import HeaderMenuEditDialog from "./HeaderMenuEditDialog";

//main function
function HeaderMenuEdit() {
  //main return
  return (
    <React.Fragment>
      <HeaderMenuEditItem />
      <HeaderMenuEditDialog />
    </React.Fragment>
  );
}

//main export
export default HeaderMenuEdit;
