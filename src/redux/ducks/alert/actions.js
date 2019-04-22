import types from "./types";

const setAlert = (isOpen, message) => ({
  type: types.SET_ALERT,
  payload: { isOpen: isOpen, message: message }
});

export { setAlert };
