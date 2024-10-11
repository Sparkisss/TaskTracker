import styles from '../styles/module/ShoppingList.module.scss';

const ShoppingList = () => {
    return (
        <div className={styles.container}>
            <h2>Shopping List</h2>
            <ul>
                <li><input type="checkbox"/> item 1</li>
                <li><input type="checkbox"/> item 2</li>
                <li><input type="checkbox"/> item 3</li>
                <li><input type="checkbox"/> item 4</li>
                <li><input type="checkbox"/> item 5</li>
                <li><input type="checkbox"/> item 6</li>
                <li><input type="checkbox"/> item 7</li>
                <li><input type="checkbox"/> item 8</li>
                <li><input type="checkbox"/> item 9</li>                
            </ul>
        </div>
    );
};

export default ShoppingList;