import types from "./types";

const doToggle = (modalType, modalProps) => ({
  type: types.TOGGLE,
  payload: { modalType: modalType, modalProps: modalProps }
});

export { doToggleModal };
