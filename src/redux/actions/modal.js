import { TOGGLE_MODAL } from "../constants/actionTypes";

const doToggleModal = (modalType, modalProps) => ({
  type: TOGGLE_MODAL,
  modalType: modalType,
  modalProps: modalProps
});

export { doToggleModal };
