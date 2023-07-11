import { Training } from '../fasciaTraining/FasciaTraining';
import styles from './FasciaTrainingList.module.css';
import { IFasciaTrainingListProps } from './IFasciaTrainingListProps';

export const FasciaTrainingList: React.FC<IFasciaTrainingListProps> = (props) => {
    return <div className={`${styles.fasciaTrainingList} ${props.className}`}>
        {props.trainings.map((training, index) => <Training title={training.title} selected={index === 1} />)}
    </div>
}