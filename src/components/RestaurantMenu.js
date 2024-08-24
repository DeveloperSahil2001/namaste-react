import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resurantMenuData = useResturantMenu(resId);

  if (resurantMenuData == null) {
    return <Shimmer />;
  }

  let resData, itemCardsData;

  if (resurantMenuData != undefined) {
    for (const card of resurantMenuData) {
      if (card?.card?.card?.info != undefined) {
        resData = card?.card?.card?.info;
        break;
      }
    }

    for (const card of resurantMenuData) {
      if (
        card?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card !=
        undefined
      ) {
        itemCardsData =
          card?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        break;
      }
    }
  }

  const { name, cusines, costForTwoMessage } = resData;

  const { itemCards } = itemCardsData || {};

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cusines?.join(", ")} - {costForTwoMessage}
      </p>
      <h2>{cusines}</h2>
      <h3>Menu</h3>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs.{item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
