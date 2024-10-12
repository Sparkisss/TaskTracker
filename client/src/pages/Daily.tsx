import DataShow from "../components/DataShow"
import Priorities from "../components/Priorities"
import ListOfItems from "../components/ListOfItems"
import HabbitTracker from "../components/HabbitTracker"
import Notes from "../components/Notes"
const Daily = () => {
    const day = 'Week of: December 21'
    
    return (
        <main className="main__daily">
            <DataShow data={day}/>
            <Priorities/>
            <ListOfItems value={9}/>
            <HabbitTracker/>
            <Notes/>
        </main>
    );
};

export default Daily;