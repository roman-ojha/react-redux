// Here we are defining that what to do
export const incNumber = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};

// now we have to go to reducer and we have to define what how we will perform this action
