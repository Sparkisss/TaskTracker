import { useState } from 'react'

import plus from '../assets/plus.svg'

import styles from '../styles/module/Priorities.module.scss'

const Priorities = () => {
    const [priorities, setPriorities] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPriorities({...priorities, [e.target.name]: e.target.value});        
    }

    const handleAdd = () => {
        console.log(priorities)
    }

    return (
        <div className={styles.container}>
            <h2>Top Priorities</h2>
            <div className={styles.column}>
                <div className={styles.item}>
                    <div className={styles.number}>1. Life goals</div>
                    <input type="text" placeholder="take here" name="life" onChange={handleChange}/>
                    <img src={plus} alt="plus" onClick={handleAdd}/>
                </div>
                <div className={styles.item}>
                    <div className={styles.number}>2. Health</div>
                    <input type="text" placeholder="take here" name="health" onChange={handleChange}/>
                    <img src={plus} alt="plus" onClick={handleAdd}/>                
                </div>
                <div className={styles.item}>
                    <div className={styles.number}>3. Career</div>
                    <input type="text" placeholder="take here" name="career" onChange={handleChange}/>
                    <img src={plus} alt="plus" onClick={handleAdd}/>                   
                </div>                            
            </div>
        </div>
    );
};

export default Priorities;