import { useMemo } from "react";
import { FasciaTrainingList } from "../features/fasciaTraining/fasciaTrainingList/FasicaTrainingList";
import { IFasciaArea } from "../features/fasciaTraining/model/IFasciaArea";
import { TurningPerson } from "../features/turningPerson/person/TurningPerson";
import styles from "./Home.module.css";

export const Home: React.FC = () => {
  const secondaryColor = useMemo(() => {
    return window
      .getComputedStyle(document.getElementById("root")!, null)
      .getPropertyValue("--secondaryColor");
  }, []);

  const fasciaArea: IFasciaArea = {
    areaName: "Upper legs",
    trainings: [
      { title: "Front rolling" },
      { title: "Back rolling" },
      { title: "Lay onto ball" },
      { title: "Something even more painful until you roll for longer" },
    ],
  };

  return (
    <div className={styles.home}>
      <TurningPerson
        className={styles.turningPerson}
        personColor={secondaryColor}
      />
      <div className={styles.fasciaArea}>
        <h1 className={styles.selectedPartTitle}>{fasciaArea.areaName}</h1>
        <FasciaTrainingList
          className={styles.trainingList}
          trainings={fasciaArea.trainings}
        />
      </div>
      <div className={styles.videoSection}>
        <span className="material-symbols-outlined">headphones</span>
      </div>
    </div>
  );
};
