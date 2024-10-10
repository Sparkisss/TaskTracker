import { useParams } from "react-router-dom";

const DayOfWeek = () => {
    const day = useParams<{day: string}>()
    
    return (
        <div>
            DayOfWeek {day.day}
        </div>
    );
};

export default DayOfWeek;