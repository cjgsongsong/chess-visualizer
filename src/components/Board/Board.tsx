import { SQUARE_IDS } from './Board.constants';
import styles from './Board.module.css';
import { getSquareColor } from './Board.utils';

const Board = () => (
  <div className={styles.board}>
    {
      SQUARE_IDS.map(squareId => (
        <div 
          className={styles[`${getSquareColor(squareId)}-square`]} 
          key={squareId}
          id={squareId}
        />
      ))
    }
  </div>
);

export default Board;
