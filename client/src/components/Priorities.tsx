import styles from '../styles/module/Priorities.module.scss';

const Priorities = () => {
    return (
        <div className={styles.container}>
            <h2>Top Priorities</h2>
            <div className={styles.column}>
                <div className={styles.item}>
                    <div className={styles.number}>1.</div>
                    <div>take here</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.number}>2.</div>
                    <div>take here</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.number}>3.</div>
                    <div>take here</div>
                </div>                
            </div>
        </div>
    );
};

export default Priorities;