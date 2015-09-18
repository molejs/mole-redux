export default store => next => action => {
  Mole.registerActionState(action, store.getState());
  return next(action);
};
