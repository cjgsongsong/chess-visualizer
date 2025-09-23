import Piece from "./Piece";
import "./Square.css";
import type { SquareType } from "./Square.types";
import { getSquareColor } from "./Square.utils";

export default ({ squareId, type }: SquareType) => (
  <div
    className={`${getSquareColor(squareId)}-square`}
    key={squareId}
    id={squareId}
  >
    <Piece type={type} />
  </div>
);
