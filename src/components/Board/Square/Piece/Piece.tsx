import { PIECE_SYMBOLS, TARGET_CLASSES } from "./Piece.constants";
import "./Piece.css";
import type { PieceType } from "./Piece.types";

export default function Piece({ pieceType, targets }: PieceType) {
  function getTargetElements(target: string) {
    const targetIdSelector = `#${target}`;
    const targetPiece = document.querySelector(`${targetIdSelector} > span`);
    const targetSquare = document.querySelector(
      targetIdSelector,
    ) as HTMLDivElement;

    return { targetPiece, targetSquare };
  }

  function handleMouseEnter() {
    targets.forEach((target) => {
      const { targetPiece, targetSquare } = getTargetElements(target);

      if (targetPiece) targetPiece.classList.add(TARGET_CLASSES.PIECE);
      targetSquare.classList.add(TARGET_CLASSES.SQUARE);
    });
  }

  function handleMouseLeave() {
    targets.forEach((target) => {
      const { targetPiece, targetSquare } = getTargetElements(target);

      if (targetPiece) targetPiece.classList.remove(TARGET_CLASSES.PIECE);
      targetSquare.classList.remove(TARGET_CLASSES.SQUARE);
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
