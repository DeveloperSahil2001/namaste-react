import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { LIST_RESTAURANTS_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);

  const [filteredResturants, setFilteredResturants] = useState([]);

  const [searchText, setSearchText] = useState("");

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
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
          />
          <button className="search-btn" onClick={() => {
            const filteredList = listOfResturants.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredResturants(filteredList)
          }}>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredResturants?.map((resData) => (
          <Link key={resData.info.id} to={'/resturants/'+resData.info.id}>
            <ResturantCard resData={resData} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
