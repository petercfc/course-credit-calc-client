import { createSelector } from "reselect";

const getModals = state => state.modal.modals;

export const makeGetModalState = modalType => {
  console.log("modalType", modalType); //creates memoized selector
  console.log(
    "createSelector",
    createSelector(
      //input selectors
      getModals,
      //transform function
      modals => modals[modalType]
    )
  ); //cre
  return createSelector(
    //input selectors
    getModals,
    //transform function
    modals => modals[modalType]
  );
};
