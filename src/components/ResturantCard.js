import { CDN_URL } from '../utils/constants'

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const ResturantCard = ({resData}) => {

    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData?.info
    const {slaString} = resData?.info?.sla

    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src={CDN_URL+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{slaString}</h4>
        </div>
    )
}

export default ResturantCard;