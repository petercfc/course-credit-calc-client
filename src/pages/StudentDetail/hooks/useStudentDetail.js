import { useContext } from "react";
import { StudentDetailContext } from "../components/StudentDetailContext";

//main hook
const useStudentDetail = () => {
  //inits state and setState from context
  const [state, setState] = useContext(StudentDetailContext);

  //sets selected student
  const setStudent = student => {
    setState(state => ({
      ...state,
      student: student
    }));
  };

  //toggles modal based on name
  const toggleModal = modalName => {
    console.log("state");
    console.log(state);
    setState(state => ({
      ...state,
      modals: { ...state.modals, [modalName]: !state.modals[modalName] }
    }));
  };

  //opens 3 dot menu
  const openMenu = event => {
    setState(state => ({ ...state, anchorEl: event.currentTarget }));
  };

  //closes 3 dot menu
  const closeMenu = () => {
    setState(state => ({ ...state, anchorEl: null }));
  };

  //main return
  return {
    setStudent,
    student: state.student,
    anchorEl: state.anchorEl,
    openMenu,
    closeMenu,
    modals: state.modals,
    toggleModal
  };
};

//main export
export default useStudentDetail;
