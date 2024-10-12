import styles from '../styles/module/ListOfItems.module.scss';

const ListOfItems = ({value}: {value: number}) => {
    return (
        <div className={styles.container}>
            <div className={styles.listContainer}> 
                <h2>Shopping List</h2>
                <ul>
                    {[...Array(value)].map((_, i) => (
                        <li key={i}><input type="checkbox"/> item {i+1}</li>
                    ))}                
                                
                </ul>
            </div>            
        </div>
    );
};

export default ListOfItems;