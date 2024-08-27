import ItemList from "./ItemList";

const ResturantCategory = ({ data, showItems, setShowIndex }) => {

  const clickHandler = () => {
    setShowIndex()
  }

  return (
    <div>
        <div className="mx-auto my-4 w-6/12 bg-gray-50 shadow-lg p-4">
          <div className="flex justify-between" onClick={clickHandler}>
            <span className="font-bont text-lg">{data.title} ({data?.itemCards?.length})</span>
            <span>⬇️</span>
          </div>
          {showItems && <ItemList items={data.itemCards}/>}
        </div>
    </div>
  )
}

export default ResturantCategory;