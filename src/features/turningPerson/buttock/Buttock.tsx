import { CSSTransition } from "react-transition-group";
import { IButtockProps } from "./IButtockProps";
import styles from './Buttock.module.css'

export const Buttock: React.FC<IButtockProps> = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={{ enter: 800, exit: 400 }}
      classNames={{
        exit: styles.visible,
        exitDone: styles.invisible,
        enterDone: styles.visible,
      }}
    >
      <div className={styles.buttock}></div>
    </CSSTransition>
  );
};
