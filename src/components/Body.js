import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { LIST_RESTAURANTS_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);

  const [filteredResturants, setFilteredResturants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const ResturantCardPromoted = withPromotedLabel(ResturantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    const data = await fetch(LIST_RESTAURANTS_URL);

    const json = await data.json();

    let resturants;

    if(json?.data?.cards != undefined){
      for(const card of json.data.cards){
        if(card?.card?.card?.gridElements?.infoWithStyle?.restaurants != undefined){
          resturants = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          break;
        }
      }
    }

    setListOfResturants(resturants);
    setFilteredResturants(resturants);
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus == false){
    return <h1>No internet connection found! Please check your internet connection.</h1>
  }

  return listOfResturants?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
          />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
            const filteredList = listOfResturants.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredResturants(filteredList)
          }}>
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfResturants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredResturants(filteredList);
            }}
          >
            Top Rated Resturants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly">
        {filteredResturants?.map((resData) => (
          <Link key={resData.info.id} to={'/resturants/'+resData.info.id}>
            {resData?.info?.promoted ? <ResturantCard resData={resData} /> : <ResturantCardPromoted resData={resData} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
