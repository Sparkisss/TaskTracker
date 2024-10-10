import { NavLink, Outlet } from "react-router-dom";

const Weekly = () => {
    const dayOfWeek: number[] = [1, 2, 3, 4, 5, 6, 7]

    return (
        <div>
            {dayOfWeek.map((day: number, i: number) => (                
                <NavLink 
                    key={i} 
                    to={`/weekly/${day}`}
                    style={({isActive}) => ({
                        color: isActive ? 'blue' : 'gray'
                    })}
                    >
                        Day {day}
                </NavLink>                   
            ))}   
            <Outlet/>        
        </div>
    );
};

export default Weekly;