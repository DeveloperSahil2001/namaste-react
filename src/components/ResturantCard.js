import { CDN_URL } from '../utils/constants'

const ResturantCard = ({resData}) => {

    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData?.info
    const {slaString} = resData?.info?.sla

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-md" src={CDN_URL+cloudinaryImageId}></img>
            <h3 className='font-bold py-2 text-lg'>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{slaString}</h4>
        </div>
    )
}

// Higher Order Component

export const withPromotedLabel = (ResturantCard) => {
    return (props) => {
        return (
            <div>
                <label className='absolute bg-black text-white ml-4 px-1 rounded-md'>Promoted</label>
                <ResturantCard {...props}/>
            </div>
        )
    }
}

export default ResturantCard;