const inititalState = {
  list: [],
  activeId: null,
};
const hobbyReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "ADD_HOBBY": {
      const newList = [...state.list];
      newList.push(action.payload);
      return { ...state, list: newList };
    }

    case "SET_ACTIVE_HOBBY": {
      const newId = action.payload.id;

      return {...state, activeId: newId}
    }
    default:
      return state;
  }
};

export default hobbyReducer;
