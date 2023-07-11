import { WinkTransition } from "../wink/WinkTransition";
import { IWinkingEye } from "./IWinkingEyeProps";
import styles from "./WinkingEye.module.css";

export const WinkingEye: React.FC<IWinkingEye> = (props) => {
  return (
    <WinkTransition visible={props.show}>
      <div
        className={`${styles.eye} ${props.show ? "" : styles.wink}`}
        style={{ left: `${props.positionInPercentFromLeft}%` }}
      ></div>
    </WinkTransition>
  );
};
