import ResturantCard from "./ResturantCard"
import { useState } from "react";
import resList from "../utils/mockData"

const Body = () => {

    const [listOfResturants, setListOfResturants] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfResturants.filter((res) => res.info.avgRating > 4)
                    setListOfResturants(filteredList)
                }
                }>Top Rated Resturants</button>
            </div>
            <div className="res-container">
                {listOfResturants.map((resData) => <ResturantCard key={resData.info.id} resData={resData}/>)}
            </div>
        </div>
    )
}

export default Body;