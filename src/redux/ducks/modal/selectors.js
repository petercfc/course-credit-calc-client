import { createSelector } from "reselect";

const oldGetModal = (state, props) =>
  state.modal.modals.find(modal => modal.modalType === props.modalType);
export const makeGetModalState = () =>
  createSelector(
    oldGetModal,
    modal => ({ modal })
  );

export const getModal = (state, modalType) =>
  state.modal.modals.find(modal => modal.modalType === modalType);
