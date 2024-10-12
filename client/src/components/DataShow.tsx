import styles from '../styles/module/DataShow.module.scss'

const DataShow = (props: any) => {
    
    return (
        <div className={styles.container}>
            {props.data}
        </div>
    );
};

export default DataShow;