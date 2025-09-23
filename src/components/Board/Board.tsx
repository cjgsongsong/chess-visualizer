import { DEFAULT_CONFIGURATION, LABEL_TYPES } from "./Board.constants";
import "./Board.css";
import { getSquareProps } from "./Board.utils";
import Labels from "./Labels";
import Square from "./Square";

export default () => {
  const squareProps = getSquareProps(DEFAULT_CONFIGURATION);

  return (
    <div className="board-container">
      <Labels type={LABEL_TYPES.FILE} />

      <div className="board-sub-container">
        <Labels type={LABEL_TYPES.RANK} />

        <div className="board">
          {squareProps.map((props) => (
            <Square {...props} />
          ))}
        </div>

        <Labels type={LABEL_TYPES.RANK} />
      </div>

      <Labels type={LABEL_TYPES.FILE} />
    </div>
  );
};
