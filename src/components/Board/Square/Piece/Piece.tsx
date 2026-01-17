import { PIECE_SYMBOLS } from "./Piece.constants";
import "./Piece.css";
import type { PieceType } from "./Piece.types";

export default function Piece({ pieceType }: PieceType) {
  return <span className="piece">{PIECE_SYMBOLS[pieceType]}</span>;
}
