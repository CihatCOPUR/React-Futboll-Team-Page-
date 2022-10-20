import "./Main.jsx"
import Card from "../Card/Card"
import  "./Main.css"
import data from "../../assets/data"

 const Main = () => {
  // const {name, number,photo,position}=data
  return (
    <div className="main">
       
      {data.map((item,index)=><Card {...item} key={index}/>
      )}
       </div>
  )
}
export default Main;