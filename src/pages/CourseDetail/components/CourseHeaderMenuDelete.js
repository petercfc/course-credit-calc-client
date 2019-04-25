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
import { DELETE_COURSE } from "../../../apollo/mutations";
import { GET_ALL_COURSES } from "../../../apollo/queries";

//material-ui
import MenuItem from "@material-ui/core/MenuItem";

//components

//main function
function CourseHeaderMenuDelete(props) {
  //destructure props
  const { course, handleClose, setAlert, history } = props;

  //main return
  return (
    <Mutation
      mutation={DELETE_COURSE}
      update={proxy => {
        const updates = ApolloCacheUpdater({
          proxy,
          queriesToUpdate: [GET_ALL_COURSES],
          searchVariables: {},
          operation: "REMOVE",
          mutationResult: { id: course.id }
        });
        if (updates) console.log(`Article removed`);
      }}
    >
      {(deleteCourse, { data }) => (
        <MenuItem
          color="secondary"
          onClick={async () => {
            await deleteCourse({
              variables: { id: course.id }
            });
            handleClose();
            setAlert(true, `Deleted course: ${course.name}`);
            history.push("/courses");
          }}
        >
          Delete Course
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
export default enhance(CourseHeaderMenuDelete);
