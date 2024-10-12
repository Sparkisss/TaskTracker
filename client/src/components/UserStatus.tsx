import styles from '../styles/module/UserStatus.module.scss'

import vHappy from '../assets/v-happy.svg'
import happy from '../assets/happy.svg'
import normal from '../assets/normal.svg'
import sad from '../assets/sad.svg'
import sadCry from '../assets/sad-cry.svg'

const UserStatus = () => {
    const smiles = [vHappy, happy, normal, sad, sadCry]
    
    return (
        <div className={styles.container}>
            {smiles.map((smile, i) => (
                <img src={smile} alt="smile" key={i} />
            ))}
        </div>
    );
};

export default UserStatus;