//other
import React from "react";
import { withRouter } from "react-router-dom";

//redux
import { compose } from "redux";
import { connect } from "react-redux";
import { alertOperations } from "../../../redux/ducks/alert";

// apollo
import ApolloCacheUpdater from "apollo-cache-updater";
import { Mutation } from "react-apollo";
import { DELETE_DEPARTMENT } from "../../../apollo/mutations";
import { GET_ALL_DEPARTMENTS } from "../../../apollo/queries";

//material-ui
import MenuItem from "@material-ui/core/MenuItem";

//components

//main function
function StudentHeaderMenuDelete(props) {
  //destructure props
  const { department, handleClose, setAlert, history } = props;

  //main return
  return (
    <Mutation
      mutation={DELETE_DEPARTMENT}
      update={proxy => {
        const updates = ApolloCacheUpdater({
          proxy,
          queriesToUpdate: [GET_ALL_DEPARTMENTS],
          searchVariables: {},
          operation: "REMOVE",
          mutationResult: { id: department.id }
        });
      }}
    >
      {deleteStudent => (
        <MenuItem
          color="secondary"
          onClick={async () => {
            await deleteStudent({
              variables: { id: department.id }
            });
            handleClose();
            setAlert(true, `Deleted department: ${department.name}`);
            history.push("/departments");
          }}
        >
          Delete Student
        </MenuItem>
      )}
    </Mutation>
  );
}

const mapDispatchToProps = {
  setAlert: alertOperations.setAlert
};

//compose hocs
const enhance = compose(
  withRouter,
  connect(
    null,
    mapDispatchToProps
  )
);
//main export
export default enhance(StudentHeaderMenuDelete);
