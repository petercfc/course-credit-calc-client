import produce from "immer";
import { combineReducers } from "redux";
import types from "./types";

const INITIAL_STATE = {
  modals: [
    {
      modalType: "createStudent",
      modalProps: {},
      isOpen: false
    },
    {
      modalType: "editStudentName",
      modalProps: { studentId: "" },
      isOpen: false
    },
    {
      modalType: "editStudentCoursesCompleted",
      modalProps: { studentId: "" },
      isOpen: false
    },
    {
      modalType: "editStudentEnrolledDegree",
      modalProps: { studentId: "" },
      isOpen: false
    },
    {
      modalType: "createCourse",
      modalProps: {},
      isOpen: false
    },
    {
      modalType: "editCourseName",
      modalProps: { courseId: "" },
      isOpen: false
    },
    {
      modalType: "editCoursesCompleted",
      modalProps: { studentId: "" },
      isOpen: false
    },
    {
      modalType: "editCourseCredits",
      modalProps: { courseId: "" },
      isOpen: false
    },
    {
      modalType: "createDepartment",
      modalProps: {},
      isOpen: false
    },
    {
      modalType: "editDepartmentName",
      modalProps: { departmentId: "" },
      isOpen: false
    },
    {
      modalType: "createSubject",
      modalProps: {},
      isOpen: false
    },
    {
      modalType: "editSubjectName",
      modalProps: { subjectId: "" },
      isOpen: false
    },
    {
      modalType: "createDegree",
      modalProps: {},
      isOpen: false
    },
    {
      modalType: "editDegreeName",
      modalProps: { degreeId: "" },
      isOpen: false
    },
    {
      modalType: "editDegreeRequiredCredits",
      modalProps: { degreeId: "" },
      isOpen: false
    }
  ],
  error: null
};

function applyToggle(state, action) {
  //start wtih state return draftState
  return produce(state, draftState => {
    //find the modal where modalType is equal to the action.modalType and toggle the isOpen property
    draftState.modals[
      draftState.modals.findIndex(
        modal => modal.modalType === action.payload.modalType
      )
    ].isOpen = !draftState.modals[
      draftState.modals.findIndex(
        modal => modal.modalType === action.payload.modalType
      )
    ].isOpen;
    //set the modalProps to action.modalProps
    if (action.payload.modalProps) {
      draftState.modals[
        draftState.modals.findIndex(
          modal => modal.modalType === action.payload.modalType
        )
      ].modalProps = action.payload.modalProps;
    }
  });
}

function modalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.TOGGLE_MODAL: {
      return applyToggle(state, action);
    }
    default:
      return state;
  }
}

//main export
export default modalReducer;
