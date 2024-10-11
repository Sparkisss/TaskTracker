import styles from '../styles/module/HabitTracker.module.scss';

const HabitTracker = () => {
    const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const habits = ['label', 'label', 'label', 'label'];

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
                    {habits.map((habit, index) => (
                        <tr key={index}>
                            <td>{habit}</td>
                            {daysOfWeek.map((_, dayIndex) => (
                                <td key={dayIndex}>
                                    <input type="checkbox" />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HabitTracker;