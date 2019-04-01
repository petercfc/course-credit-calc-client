//other
import React, { useState } from "react";

//create context
const StudentDetailContext = React.createContext([{}, () => {}]);

//create provider
const StudentDetailProvider = props => {
  const [state, setState] = useState({});
  return (
    <StudentDetailContext.Provider value={[state, setState]}>
      {props.children}
    </StudentDetailContext.Provider>
  );
};

//export context and provider
export { StudentDetailContext, StudentDetailProvider };
