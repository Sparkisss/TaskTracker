import DataShow from "../components/DataShow"
import Priorities from "../components/Priorities"
import ShoppingList from "../components/ShoppingList"
import HabbitTracker from "../components/HabbitTracker"
import Notes from "../components/Notes"
const Daily = () => {
    return (
        <main className="main">
            <DataShow/>
            <Priorities/>
            <ShoppingList/>
            <HabbitTracker/>
            <Notes/>
        </main>
    );
};

export default Daily;