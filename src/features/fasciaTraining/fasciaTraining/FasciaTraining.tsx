import { IFasciaTrainingProps } from './IFasciaTrainingProps';
import styles from './FasciaTraining.module.css';

export const Training: React.FC<IFasciaTrainingProps> = (props) => {
    return <div className={`${styles.fasciaTraining} ${props.selected ? styles.selected : ""}`}>{props.title}</div>
}