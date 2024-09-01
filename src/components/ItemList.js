import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items, addRemoveButton }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index))
  }

  return (
    <div>
      {items.map((item, index) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
            <div className="flex justify-center">
              <button
                className="p-2 m-2 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
              {addRemoveButton && (<button
                className="p-2 m-2 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleRemoveItem(index)}
              >
                Remove -
              </button>)}
            </div>
          </div>
          <div className="w-3/12">
            {item?.card?.info?.imageId && (
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className="w-full"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
