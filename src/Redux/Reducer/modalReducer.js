const initState = {
  isValid: false,
};

export const reducerModal = (state = initState, actions) => {
  console.log(actions);
  switch (actions.type) {
    case "CHANGEMODAL":
      return (state = {
        ...state,
        isValid: !state.isValid,
      });

    default:
      return state;
  }
};
