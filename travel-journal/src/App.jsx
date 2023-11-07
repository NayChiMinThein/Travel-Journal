import Journal from "./components/Journal";
import Navbar from "./components/Navbar";
import data from "./data"

export default function App() {
  return (
    <div className="">
      <Navbar/>
      <div className="p-10 sm:p-20">
        {data.map(item => (
          <Journal item={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}