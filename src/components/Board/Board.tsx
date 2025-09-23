import { LABEL_TYPES, SQUARE_IDS } from "./Board.constants";
import "./Board.css";
import Labels from "./Labels";
import Square from "./Square";

export default () => (
  <div className="board-container">
    <Labels type={LABEL_TYPES.FILE} />

    <div className="board-sub-container">
      <Labels type={LABEL_TYPES.RANK} />

      <div className="board">
        {SQUARE_IDS.map((squareId) => (
          <Square squareId={squareId} />
        ))}
      </div>

      <Labels type={LABEL_TYPES.RANK} />
    </div>

    <Labels type={LABEL_TYPES.FILE} />
  </div>
);
