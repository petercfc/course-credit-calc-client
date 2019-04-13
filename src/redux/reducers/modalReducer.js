const INITIAL_STATE = {
  modals: [{ id: "editName", isOpen: false }],
  error: null
};

function appleToggleModal(state, action) {
  return state.modals.map(modal =>
    modal.id === action.modal.id
      ? Object.assign({}, modal, { isOpen: !modal.isOpen })
      : modal
  );
}

function modalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TOGGLE_MODAL": {
      return appleToggleModal(state, action);
    }
    default:
      return state;
  }
}

//main export
export default modalReducer;
