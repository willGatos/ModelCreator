import "./App.css"
import MyDocument from "./Components/DocumentGenerator"
import EnhancedTable from "./Components/Tables"
import {useState} from "react";
export default function App() {
  const [allHBL, setAllHBL] = useState([])

  return(<>
  
    <EnhancedTable allHBL={allHBL} setAllHBL={setAllHBL} />
    {allHBL.length !== 0 &&
    <MyDocument allHBL={allHBL} setAllHBL={setAllHBL}/>}
    
  </>
       
      
  )
}