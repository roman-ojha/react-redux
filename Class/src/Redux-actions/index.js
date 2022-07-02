const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};

const removeTodo = () => {
  return {
    type: "REMOVE_TODO",
  };
};

export { addTodo, deleteTodo, removeTodo };
