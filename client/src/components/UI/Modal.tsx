import styles from './Modal.module.scss';

export const Modal = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Добавить новый элемент</h2>
                <form>
                    <input type="text" placeholder="Название" /> 
                    <div>
                        <button type="submit">Добавить</button>
                        <button onClick={onClose}>Закрыть</button>
                    </div>
                </form>
                
            </div>
        </div>
    );
};