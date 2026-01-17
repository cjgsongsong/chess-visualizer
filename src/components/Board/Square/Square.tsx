import Piece from "./Piece";
import "./Square.css";
import type { SquareType } from "./Square.types";
import { getSquareType } from "./Square.utils";

export default function Square({ pieceType, squareId, targets }: SquareType) {
  const baseSquareClass = `${getSquareType(squareId)} square`;

  return (
    <div className={baseSquareClass} key={squareId} id={squareId}>
      {pieceType && targets && (
        <Piece pieceType={pieceType} targets={targets} />
      )}
    </div>
  );
}
