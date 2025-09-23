import styles from "./Square.module.css";
import type { SquareType } from "./Square.types";
import { getSquareColor } from "./Square.utils";

export default ({ squareId }: SquareType) => (
  <div
    className={styles[`${getSquareColor(squareId)}-square`]}
    key={squareId}
    id={squareId}
  />
);
