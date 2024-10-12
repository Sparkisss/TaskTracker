import { NavLink, Outlet } from "react-router-dom";

const Weekly = () => {
    const dayOfWeek: string[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

    return (
        <main className="main_dayOfWeek">
            
            <div className="dayOfWeek">            
                {dayOfWeek.map((day: string, i: number) => (
                    <div key={i}>
                        <NavLink 
                            to={`/weekly/${day}`}
                            className={({isActive}) => isActive ? 'active' : 'inactive'}
                            >
                                {day}
                        </NavLink> 
                        <input type="radio" name="day" className="day-checkbox" />
                    </div>                             
                ))}
            </div>               
            <Outlet/>        
        </main>
    );
};

export default Weekly;