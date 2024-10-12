import React from "react";
import styles from "../styles/module/Schedule.module.scss";

const Schedule = () => {
    const timeOfDay = 
    ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm', '9 pm', '10 pm']
    
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Daily Schedule</h2>
            <div className={styles.scheduleGrid}>
                {timeOfDay.map((time, index) => (
                    <div key={index} className={styles.scheduleRow}>
                        <div className={styles.time}>{time}</div>  
                        <span className={styles.label}>label</span>                     
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Schedule;