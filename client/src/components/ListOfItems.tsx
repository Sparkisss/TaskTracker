import ReactDOM from 'react-dom';
import { useState } from 'react';
import {Modal} from './UI/Modal';

import styles from '../styles/module/ListOfItems.module.scss';
import edit from '../assets/edit.svg'
import trash from '../assets/trash.svg'
import plus from '../assets/plus.svg'

const ListOfItems = ({value}: {value: number}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleShowModal = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className={styles.container}>
            <div className={styles.listContainer}> 
                <h2>Shopping List</h2>
                <ul>
                    {[...Array(value)].map((_, i) => (
                        <li key={i}>
                            <div>
                                <input type="checkbox" id={`item ${i+1}`}/> 
                                <label htmlFor={`item ${i+1}`}>item {i+1}
                                    <img src={edit} alt="edit"/>
                                    <img src={trash} alt="delete"/>
                                </label>
                            </div>                                                        
                        </li>                        
                    ))}         
                </ul>
                <img className={styles.plus} src={plus} alt="plus" onClick={handleShowModal}/>
                {isModalOpen && ReactDOM.createPortal(<Modal onClose={handleCloseModal}/>, document.body)}
            </div>            
        </div>
    );
};


export default ListOfItems;