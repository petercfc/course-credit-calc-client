const INITIAL_STATE = {
  modals: [{ id: "editName", isOpen: false }],
  error: null
};

function applyToggleModal(state, action) {
  console.log("state", state);
  return state.modals.map(modal =>
    modal.id === action.id
      ? Object.assign({}, modal, { isOpen: !modal.isOpen })
      : modal
  );
}

function modalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TOGGLE_MODAL": {
      return applyToggleModal(state, action);
    }
    default:
      return state;
  }
}

//main export
export default modalReducer;
