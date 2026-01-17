import { PIECE_SYMBOLS } from "./Piece.constants";
import "./Piece.css";
import type { PieceType } from "./Piece.types";

export default function Piece({ pieceType, targets }: PieceType) {
  function handleMouseEnter() {
    targets.forEach((target) => {
      const targetSquare = document.querySelector(
        `#${target}`,
      ) as HTMLDivElement;

      targetSquare.classList.add("targetable");
    });
  }

  function handleMouseLeave() {
    targets.forEach((target) => {
      const targetSquare = document.querySelector(
        `#${target}`,
      ) as HTMLDivElement;

      targetSquare.classList.remove("targetable");
    });
  }

  return (
    <span
      className="piece"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {PIECE_SYMBOLS[pieceType]}
    </span>
  );
}
