import { createSelector } from "reselect";

const makeGetModal = () =>
  createSelector(
    (state, props) => props.modalType,
    state => state.modalState.modals,
    (modalType, modals) => modals.find(modal => modal.modalType === modalType)
  );

export { makeGetModal };
