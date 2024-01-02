import { useAppSelector, useAppDispatch } from "../hooks/useAppState";
import {
  ordered as orderCake,
  restocked as restockCake,
} from "../lib/features/cake/cakeSlice";

// https://redux.js.org/usage/nextjs#per-route-state
const Cake = (): React.JSX.Element => {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);

  // this hooks returns the reference to the dispatch function from redux store.
  const dispatch = useAppDispatch();
  // we can use this to dispatch action when needed

  return (
    <div>
      <h1>Number of cakes - {numOfCakes} </h1>
      <button onClick={(_e) => dispatch(orderCake())}>Order cake</button>
      <button onClick={(_e) => dispatch(restockCake(5))}>Restock cakes</button>
    </div>
  );
};

export default Cake;
