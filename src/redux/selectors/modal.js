import { createSelector } from "reselect";

const makeGetModal = () =>
  createSelector(
    (state, modalType) => modalType.modalType,
    state => state.modalState.modals,
    (modalType, modals) => modals.find(modal => modal.modalType === modalType)
  );

export { makeGetModal };
