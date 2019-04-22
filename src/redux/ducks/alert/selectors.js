import { createSelector } from "reselect";

const getAlert = (state, props) => state.alert;
export const makeGetModalState = () =>
  createSelector(
    getAlert,
    alert => ({ alert })
  );
