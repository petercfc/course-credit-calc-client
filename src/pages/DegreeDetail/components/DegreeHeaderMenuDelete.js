//other
import React from "react";
import { withRouter } from "react-router-dom";

//redux
import { compose } from "redux";
import { connect } from "react-redux";
import { alertOperations } from "redux/ducks/alert";

// apollo
import ApolloCacheUpdater from "apollo-cache-updater";
import { Mutation } from "react-apollo";
import { DELETE_DEGREE } from "apollo/mutations";
import { GET_ALL_DEGREES } from "apollo/queries";

//material-ui
import MenuItem from "@material-ui/core/MenuItem";

//components

//main function
function StudentHeaderMenuDelete(props) {
  //destructure props
  const { degree, handleClose, setAlert, history } = props;

  //main return
  return (
    <Mutation
      mutation={DELETE_DEGREE}
      update={proxy => {
        const updates = ApolloCacheUpdater({
          proxy,
          queriesToUpdate: [GET_ALL_DEGREES],
          searchVariables: {},
          operation: "REMOVE",
          mutationResult: { id: degree.id }
        });
      }}
    >
      {deleteSubject => (
        <MenuItem
          color="secondary"
          onClick={async () => {
            await deleteSubject({
              variables: { id: degree.id }
            });
            handleClose();
            setAlert(true, `Deleted degree: ${degree.name}`);
            history.push("/degrees");
          }}
        >
          Delete Degree
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
