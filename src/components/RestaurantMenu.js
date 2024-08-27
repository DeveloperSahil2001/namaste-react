import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resurantMenuData = useResturantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resurantMenuData == null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resurantMenuData[2]?.card?.card?.info;

  const categories =
    resurantMenuData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <ResturantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index == showIndex}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
