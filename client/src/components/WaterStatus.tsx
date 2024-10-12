import styles from '../styles/module/WaterStatus.module.scss'

import drops from '../assets/drops.svg'

const WaterStatus = () => {
    return (
        <div className={styles.container}>
            Water: 
            {[...Array(7)].map((_, i) => (
                <img src={drops} alt="drops" key={i} />
            ))}         
        </div> 
    );
};

export default WaterStatus;