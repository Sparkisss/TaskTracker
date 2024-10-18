import { useState, useEffect } from 'react';

import { getData, putData } from '../services/api';
import { processData } from '../services/processData'
import { NotesState } from '../types/types';
import plus from '../assets/plus.svg'

import styles from '../styles/module/Notes.module.scss';

const Notes = () => {
    const [notes, setNotes] = useState<NotesState>({ _id: '', notes: '' });

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNotes({...notes, notes: e.target.value});
    }

    useEffect(() => {
        getData('http://localhost:5000/notes').then(data => processData<NotesState>(data, setNotes));
    }, []);

    return (
        <div className={styles.container}>
            <h2>Notes</h2>
            <textarea placeholder="Type here" value={notes.notes} onChange={handleChange}></textarea>
            <img src={plus} alt="plus" onClick={() => putData(notes, 'http://localhost:5000/notes')}/> 
        </div>
    );
};

export default Notes;