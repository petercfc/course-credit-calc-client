import types from "./types";

const toggleModal = (modalType, modalProps) => ({
  type: types.TOGGLE_MODAL,
  payload: { modalType: modalType, modalProps: modalProps }
});

export { toggleModal };
