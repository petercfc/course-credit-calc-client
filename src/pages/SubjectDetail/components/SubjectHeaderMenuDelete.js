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
import { DELETE_SUBJECT } from "apollo/mutations";
import { GET_ALL_SUBJECTS } from "apollo/queries";

//material-ui
import MenuItem from "@material-ui/core/MenuItem";

//components

//main function
function StudentHeaderMenuDelete(props) {
  //destructure props
  const { subject, handleClose, setAlert, history } = props;

  //main return
  return (
    <Mutation
      mutation={DELETE_SUBJECT}
      update={proxy => {
        const updates = ApolloCacheUpdater({
          proxy,
          queriesToUpdate: [GET_ALL_SUBJECTS],
          searchVariables: {},
          operation: "REMOVE",
          mutationResult: { id: subject.id }
        });
      }}
    >
      {deleteSubject => (
        <MenuItem
          color="secondary"
          onClick={async () => {
            await deleteSubject({
              variables: { id: subject.id }
            });
            handleClose();
            setAlert(true, `Deleted subject: ${subject.name}`);
            history.push("/subjects");
          }}
        >
          Delete Subject
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
