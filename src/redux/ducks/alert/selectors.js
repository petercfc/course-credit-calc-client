import { createSelector } from "reselect";

const getAlert = (state, props) => state.alert;
export const makeGetAlertState = () =>
  createSelector(
    getAlert,
    alert => ({ alert })
  );
