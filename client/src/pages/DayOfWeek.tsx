import { useParams } from "react-router-dom"

import DataShow from "../components/DataShow"
import Schedule from "../components/Schedule"
import Notes from "../components/Notes"
import ListOfItems from "../components/ListOfItems"
import UserStatus from "../components/UserStatus"
import WaterStatus from "../components/WaterStatus"



const DayOfWeek = () => {
    const day = useParams<{day: string}>()
    const date = ['Date of: December 21']   

    return (
        <>
            <div className="header"><DataShow data={date}/></div>            
            <div className="smile"><UserStatus/></div>
            <div className="water"><WaterStatus/></div>
            <div className="important"><ListOfItems value={3}/></div>
            <div className="todos"><ListOfItems value={12}/></div>
            <Schedule />
            <Notes />
        </>
    );
};

export default DayOfWeek;