import { useAppDispatch, useAppSelector } from "../hooks/useAppState";
import { iceCreamAction } from "../lib/features/icecream/iceCreamSlice";

const IceCream = (): React.JSX.Element => {
  const numOfIceCreams = useAppSelector(
    (state) => state.iceCream.numOfIceCreams
  );
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Number of IceCream - {numOfIceCreams} </h1>
      <button onClick={(_e) => dispatch(iceCreamAction.ordered())}>
        Order ice cream
      </button>
      <button onClick={(_e) => dispatch(iceCreamAction.restocked(3))}>
        Restock ice cream
      </button>
    </div>
  );
};

export default IceCream;
