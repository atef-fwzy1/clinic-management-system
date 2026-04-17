import "./AllPatients.css"
import HeaderPatint from "../../components/pathiontdetaielsHeader/HeaderPatint"
import SearchAppBar from "../../components/Searchinput/Searchinput"
import PatientList from "../../components/PatientList/PatientList"
import BottomNav from "../../components/BottonNav/BottomNav"
import { useState } from "react";
import { SearchContext } from "../../Context/SearchContext";
export default function AllPatients(){
      const [search,setSearch] = useState("")
      console.log(search)
    return(
        <div className="container">
              <HeaderPatint title={"كل المرضي"}/>
        <div className="allpatient">
            <SearchContext.Provider value={{ search,setSearch }}>
            <SearchAppBar/>
            <PatientList page="allpatient"/>
            </SearchContext.Provider>
            <BottomNav/>
        </div>
        </div>
    )
}