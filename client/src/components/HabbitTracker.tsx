import { useState, useEffect } from 'react';
import { Habit } from '../types/types';
import { putData, getData } from '../services/api';
import { processData } from '../services/processData'
import plus from '../assets/plus.svg';
import styles from '../styles/module/HabitTracker.module.scss';

const HabitTracker = () => {
    const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    const defaultHabits: Habit[] = [
        { _id: '1', label: 'Habit 1', days: [false, false, false, false, false, false, false] },
        { _id: '2', label: 'Habit 2', days: [false, false, false, false, false, false, false] },
        { _id: '3', label: 'Habit 3', days: [false, false, false, false, false, false, false] },
        { _id: '4', label: 'Habit 4', days: [false, false, false, false, false, false, false] },
    ];

    const [habits, setHabits] = useState<Habit[]>(defaultHabits);
       
    useEffect(() => {
        getData('http://localhost:5000/habits').
            then(response => {setHabits(response[0].habits)})
    }, []);
  
    const toggleHabit = (habitId: string, dayIndex: number) => {
        setHabits(habits.map(habit => 
            habit._id === habitId 
                ? { ...habit, days: habit.days.map((day, index) => index === dayIndex ? !day : day) }
                : habit
        ));
    };

    const updateHabit = (habitId: string, newLabel: string) => {
        setHabits(habits.map(habit =>
            habit._id === habitId ? { ...habit, label: newLabel } : habit
        ));
    };

    return (
        <div className={styles.container}>            
            <table className={styles.tracker}>
                <thead>
                    <tr>
                        <th>Habit Tracker</th>
                        {daysOfWeek.map((day, index) => (
                            <th key={index}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {habits.map((habit) => (
                        <tr key={habit._id}>
                            <td><input type="text" value={habit.label} onChange={(e) => updateHabit(habit._id, e.target.value)} /></td>
                            {habit.days.map((checked, dayIndex) => (
                                <td key={dayIndex}>
                                    <input 
                                        type="checkbox" 
                                        checked={checked}
                                        onChange={() => toggleHabit(habit._id, dayIndex)}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <img src={plus} alt="plus" onClick={() => putData(habits, 'http://localhost:5000/habits', true, 'habits')}/>
        </div>
    );
};

export default HabitTracker;