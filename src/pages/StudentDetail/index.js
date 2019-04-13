//other
import React from "react";

//redux
import { connect } from "react-redux";
import { doToggleModal } from "../../redux/actions/modal";
import { getModals } from "../../redux/selectors/modal";

//components
import StudentDetailView from "./components/StudentDetailView";

//main function
const StudentDetail = props => {
  //destructure props
  const {
    location: { pathname },
    modals
  } = props;

  //get the student id from the url string
  const extractStudentId = pathname => {
    const id = pathname.split("/")[2];
    return id.substr(1);
  };

  //main return
  return (
    <div>
      {console.log(modals)}
      <StudentDetailView studentId={extractStudentId(pathname)} />
    </div>
  );
};

const mapStateToProps = state => ({
  modals: getModals(state)
});

const mapDispatchToProps = dispatch => ({
  onToggle: id => dispatch(doToggleModal(id))
});

//main export
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentDetail);
