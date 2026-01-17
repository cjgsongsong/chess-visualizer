import Piece from "./Piece";
import "./Square.css";
import type { SquareType } from "./Square.types";
import { addSpace, getSquareType } from "./Square.utils";

export default function Square({ canTarget, pieceType, squareId }: SquareType) {
  const squareClass =
    addSpace(getSquareType(squareId)) +
    addSpace(canTarget ? "targetable" : "") +
    "square";

  return (
    <div className={squareClass} key={squareId} id={squareId}>
      {pieceType && <Piece pieceType={pieceType} />}
    </div>
  );
}
