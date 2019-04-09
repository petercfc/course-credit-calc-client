import { useContext } from "react";
import { StudentDetailContext } from "../components/StudentDetailContext";

//main hook
const useStudentDetail = () => {
  //inits state and setState from context
  const [state, setState] = useContext(StudentDetailContext);

  //sets selected student
  function setStudent(student) {
    setState(state => ({
      ...state,
      student: student
    }));
    console.log("setStudent");
    console.log(student);
  }

  //opens 3 dot menu
  function editNameModalToggle() {
    setState(state => ({
      ...state,
      editNameModalState: !state.editNameModalState
    }));
    console.log("toggled modal");
  }

  //opens 3 dot menu
  function openMenu(event) {
    setState(state => ({ ...state, anchorEl: event.currentTarget }));
    console.log("did open menu");
  }

  //closes 3 dot menu
  function closeMenu() {
    setState(state => ({ ...state, anchorEl: null }));
    console.log("did close menu");
  }

  //main return
  return {
    setStudent,
    student: state.student,
    anchorEl: state.anchorEl,
    openMenu,
    closeMenu,
    editNameModalState: state.editNameModalState,
    editNameModalToggle
  };
};

//main export
export default useStudentDetail;
