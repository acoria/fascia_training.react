import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Icon } from "../../../components/icon/Icon";
import { MaterialIcons } from "../../../components/icon/MaterialIcons";
import { ReactComponent as PersonImage } from "../assets/person.svg";
import { Buttock } from "../buttock/Buttock";
import { WinkingEye } from "../eye/winkingEye/WinkingEye";
import { ITurningPersonProps } from "./ITurningPersonProps";
import styles from "./TurningPerson.module.css";

export const TurningPerson: React.FC<ITurningPersonProps> = (props) => {
  const [showFront, setShowFront] = useState(true);
  const [showFullSize, setShowFullSize] = useState(true);

  return (
    <CSSTransition
      in={!showFullSize}
      timeout={500}
      classNames={{
        enter: styles.personShrink,
        enterDone: styles.personShrunk,
        exitActive: styles.personShrunk,
        exit: styles.personGrow,
      }}
    >
      <div className={`${styles.turningPerson} ${props.className}`}>
        <div className={styles.personAndArrow}>
          <div>
            <PersonImage
              style={{ color: props.personColor ?? "black" }}
              className={`${styles.image} ${
                showFront ? "" : styles.flipSideways
              }`}
              onClick={() => setShowFullSize((previous) => !previous)}
            />
            <Buttock show={!showFront} />
            <WinkingEye show={showFront} positionInPercentFromLeft={50} />
            <WinkingEye show={showFront} positionInPercentFromLeft={60} />
          </div>
          {showFullSize && (
            <Icon
              icon={MaterialIcons.refresh}
              style={{ color: props.personColor ?? "black" }}
              className={`${styles.turnButton} ${
                !showFront && styles.turnButtonTurned
              }`}
              onClick={() => setShowFront((previous) => !previous)}
            />
          )}
        </div>
      </div>
    </CSSTransition>
  );
};
