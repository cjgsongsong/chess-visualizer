import { LABEL_TYPES, SQUARE_IDS } from "./Board.constants";
import styles from "./Board.module.css";
import Labels from "./Labels";
import Square from "./Square";

export default () => (
  <div className={styles["board-container"]}>
    <Labels type={LABEL_TYPES.FILE} />
    <div className={styles["board-sub-container"]}>
      <Labels type={LABEL_TYPES.RANK} />
      <div className={styles.board}>
        {SQUARE_IDS.map((squareId) => (
          <Square squareId={squareId} />
        ))}
      </div>
      <Labels type={LABEL_TYPES.RANK} />
    </div>
    <Labels type={LABEL_TYPES.FILE} />
  </div>
);
