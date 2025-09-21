import { SQUARE_IDS } from './Board.constants';
import styles from './Board.module.css';
import Square from './Square';

export default () => (
  <div className={styles.board}>
    {
      SQUARE_IDS.map(squareId => (
        <Square squareId={squareId} />
      ))
    }
  </div>
);
