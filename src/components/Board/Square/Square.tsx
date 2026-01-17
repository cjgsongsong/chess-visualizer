import Piece from "./Piece";
import "./Square.css";
import type { SquareType } from "./Square.types";
import { getSquareType } from "./Square.utils";

export default function Square({ squareId, type }: SquareType) {
  const squareClass = `${getSquareType(squareId)}-square`;

  return (
    <div className={squareClass} key={squareId} id={squareId}>
      {type && <Piece type={type} />}
    </div>
  );
}
