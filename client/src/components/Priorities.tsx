import { useState, useEffect } from 'react'

import { getData, putData } from '../services/api'
import { processData } from '../services/processData'
import { PrioritiesState } from '../types/types'
import plus from '../assets/plus.svg'

import styles from '../styles/module/Priorities.module.scss'

const Priorities = () => {
    const [priorities, setPriorities] = useState<PrioritiesState>({ _id: '', life: '', health: '', career: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPriorities({...priorities, [e.target.name]: e.target.value});             
    }

    useEffect(() => {
        getData('http://localhost:5000').then(data => processData<PrioritiesState>(data, setPriorities))
    }, [])

    return (
        <div className={styles.container}>
            <h2>Top Priorities</h2>
            <div className={styles.column}>
                <div className={styles.item}>
                    <div className={styles.number}>1. Life goals</div>
                    <input type="text" placeholder="take here" name="life" value={priorities.life} onChange={handleChange}/>                    
                </div>
                <div className={styles.item}>
                    <div className={styles.number}>2. Health</div>
                    <input type="text" placeholder="take here" name="health" value={priorities.health} onChange={handleChange}/>                                 
                </div>
                <div className={styles.item}>
                    <div className={styles.number}>3. Career</div>
                    <input type="text" placeholder="take here" name="career" value={priorities.career} onChange={handleChange}/>                 
                </div>                                          
            </div>
            <img src={plus} alt="plus" onClick={() => putData(priorities, 'http://localhost:5000')}/>   
        </div>
    );
};

export default Priorities;