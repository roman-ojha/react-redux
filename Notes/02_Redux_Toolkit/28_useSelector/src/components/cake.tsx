import { useAppSelector } from "../hooks/useAppState";

// https://redux.js.org/usage/nextjs#per-route-state
const Cake = (): React.JSX.Element => {
  // useSelector provide state as argument where we can return a value for now we will just going to return the 'cake' data
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  return (
    <div>
      <h1>Number of cakes - {numOfCakes} </h1>
      <button>Order cake</button>
      <button>Restock cakes</button>
    </div>
  );
};

export default Cake;
