//other
import React, { useState } from "react";

//create context
const StudentDetailContext = React.createContext([{}, () => {}]);

//create provider and init state
const StudentDetailProvider = props => {
  const [state, setState] = useState({
    student: { name: "" },
    anchorEl: null,
    modals: { editName: false, editDegree: false }
  });
  return (
    <StudentDetailContext.Provider value={[state, setState]}>
      {props.children}
    </StudentDetailContext.Provider>
  );
};

//export context and provider
export { StudentDetailContext, StudentDetailProvider };
