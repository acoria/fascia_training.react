import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Icon } from "../../../components/icon/Icon";
import { MaterialIcons } from "../../../components/icon/MaterialIcons";
import { ReactComponent as PersonImage } from "../assets/person.svg";
import { Buttock } from "../buttock/Buttock";
import { WinkingEye } from "../eye/winkingEye/WinkingEye";
import { ITurningPersonProps } from "./ITurningPersonProps";
import styles from "./TurningPerson.module.css";
import { ImagePartPicker } from "../../../lib/imagePartPicker/ImagePartPicker";
import { BodyParts } from "../../../lib/imagePartPicker/types/BodyParts";

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
            <ImagePartPicker<typeof BodyParts>
              gridConfig={(grid) => {
                grid.setWidth(20);
                grid.setHeight(20);

                grid.data.set(BodyParts.HEAD, [
                  { x: 9, y: 0 },
                  { x: 8, y: 1 },
                  { x: 8, y: 0 },
                  { x: 9, y: 1 },
                  { x: 9, y: 2 },
                  { x: 8, y: 2 },
                  { x: 9, y: 3 },
                  { x: 10, y: 3 },
                  { x: 11, y: 3 },
                  { x: 12, y: 3 },
                  { x: 12, y: 2 },
                  { x: 13, y: 2 },
                  { x: 11, y: 2 },
                  { x: 10, y: 2 },
                  { x: 10, y: 1 },
                  { x: 10, y: 0 },
                  { x: 12, y: 0 },
                  { x: 11, y: 0 },
                  { x: 11, y: 1 },
                  { x: 12, y: 1 },
                  { x: 13, y: 1 },
                  { x: 13, y: 0 },
                ]);

                grid.data.set(BodyParts.FOOT, [
                  { x: 9, y: 19 },
                  { x: 9, y: 18 },
                  { x: 10, y: 18 },
                  { x: 10, y: 19 },
                  { x: 2, y: 17 },
                  { x: 2, y: 16 },
                  { x: 3, y: 16 },
                  { x: 3, y: 17 },
                ]);
                return grid;
              }}
              gridHeight={20}
              gridWidth={20}
              image={
                <PersonImage
                  style={{ color: props.personColor ?? "black" }}
                  className={`${styles.image} ${
                    showFront ? "" : styles.flipSideways
                  }`}
                />
              }
              onPartSelect={(part) => {
                switch (part) {
                  case BodyParts.HEAD: {
                    alert("Head clicked");
                    break;
                  }
                  case BodyParts.FOOT: {
                    alert("Foot clicked");
                    break;
                  }
                }
              }}
              onSelect={() => setShowFullSize((previous) => !previous)}
            />
            {/* <PersonImage
              style={{ color: props.personColor ?? "black" }}
              className={`${styles.image} ${
                showFront ? "" : styles.flipSideways
              }`}
              onClick={() => setShowFullSize((previous) => !previous)}
            /> */}
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
