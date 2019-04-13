import { TOGGLE_MODAL } from "../constants/actionTypes";

const doToggleModal = id => ({
  type: TOGGLE_MODAL,
  id
});

export { doToggleModal };
