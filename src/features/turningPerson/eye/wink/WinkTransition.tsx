import { ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./WinkTransition.module.css";

export const WinkTransition: React.FC<{
  children: ReactNode;
  visible: boolean;
}> = (props) => (
  <CSSTransition
    in={props.visible}
    timeout={1000}
    classNames={{
      enter: `${styles.invisible} ${styles.wink}`,
      enterDone: styles.unwink,
      exitDone: styles.invisible,
    }}
  >
    {props.children}
  </CSSTransition>
);
