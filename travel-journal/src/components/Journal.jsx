/* eslint-disable react/prop-types */
const Journal = (props) => {
  return (
    <div>
      <div className="sm:flex">
        <img src={props.item.imageUrl} alt="Mount Fuji" className="sm:w-52 sm:h-60 rounded-md" />
        <div className="sm:ml-8 mt-4">
          {/* show in larger than sm screen */}
          <div className="hidden sm:flex sm:items-center">
            <p className="uppercase mr-5 tracking-wider mb-1 sm:mb-0">
              <i className="fa-solid fa-location-dot text-red-500 mr-1"></i>
              {props.item.location}
            </p>
            <a href={props.item.googleMapUrl} className="hover:underline text-gray-400">View on Google Maps</a>
          </div>
          <h2 className="text-xl sm:text-4xl font-bold mt-2 text-gray-800">{props.item.title}</h2>

          {/* show in less than sm screen */}
          <div className="text-sm flex mt-2 sm:hidden">
            <p className="uppercase mr-5 tracking-wider mb-1 sm:mb-0">
              <i className="fa-solid fa-location-dot text-red-500 mr-1"></i>
              {props.item.location}
            </p>
            <a href={props.item.googleMapUrl} className="hover:underline text-gray-400">View on Google Maps</a>
          </div>

          <p className="font-semibold mt-2 sm:mt-6 text-sm sm:text-base">
            {props.item.startDate} - {props.item.endDate}
          </p>
          <p className="mt-2 text-sm sm:text-base">{props.item.description}</p>
        </div>
      </div>
      <hr className="my-10" />
    </div>
  )
}

export default Journal