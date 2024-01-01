const initialData = {
  // we have to show the todo one by one, so we need the array for that
  list: [],
};
const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          // for previous data
          {
            id: id,
            data: data,
            // new data
          },
        ],
      };
    case "DELETE_TODO":
      const newList = state.list.filter((elem) => elem.id !== action.id);
      // if deleted todo doesn't match with the existed todo then return those todo list and will now going to return the todo if that match the id
      return {
        ...state,
        list: newList,
      };
    case "REMOVE_TODO":
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};

export default todoReducers;
