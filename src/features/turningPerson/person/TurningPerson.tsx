import { useState } from "react";
import styles from "./TurningPerson.module.css";
import person from "../assets/person.png";
import { Buttock } from "../buttock/Buttock";
import { WinkingEye } from "../eye/winkingEye/WinkingEye";
import { CSSTransition } from "react-transition-group";
import { Icon } from "../../../components/icon/Icon";
import { MaterialIcons } from "../../../components/icon/MaterialIcons";
import { ITurningPersonProps } from "./ITurningPersonProps";

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
        exit: styles.personGrow
      }}
    >
      <div className={`${styles.turningPerson} ${props.className}`}>
        <img
          className={`${styles.image} ${showFront ? "" : styles.flipSideways}`}
          src={person}
          alt="Person"
          onClick={() => setShowFullSize((previous) => !previous)}
        />
        <Buttock show={!showFront} />
        <WinkingEye show={showFront} positionInPercentFromLeft={50} />
        <WinkingEye show={showFront} positionInPercentFromLeft={60} />
        {showFullSize && <Icon icon={MaterialIcons.refresh} className={styles.turnButton} onClick={() => setShowFront((previous) => !previous)} />}
      </div>
    </CSSTransition>
  );
};
