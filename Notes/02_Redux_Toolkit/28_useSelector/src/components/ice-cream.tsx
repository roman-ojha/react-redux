import { useAppSelector } from "../hooks/useAppState";

const IceCream = (): React.JSX.Element => {
  const numOfIceCreams = useAppSelector(
    (state) => state.iceCream.numOfIceCreams
  );
  return (
    <div>
      <h1>Number of IceCream - {numOfIceCreams} </h1>
      <button>Order ice cream</button>
      <button>Restock ice cream</button>
    </div>
  );
};

export default IceCream;
