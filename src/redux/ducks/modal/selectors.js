import { createSelector } from "reselect";

const getModal = (state, props) =>
  state.modal.modals.find(modal => modal.modalType === props.modalType);
export const makeGetModalState = () =>
  createSelector(
    getModal,
    modal => ({ modal })
  );
