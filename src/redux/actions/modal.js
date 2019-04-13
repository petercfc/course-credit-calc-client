import { TOGGLE_MODAL } from "../constants/actionTypes";

const doToggleModal = modals => ({
  type: TOGGLE_MODAL,
  modals
});

export { doToggleModal };
