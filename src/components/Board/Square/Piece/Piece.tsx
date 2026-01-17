import { PIECE_SYMBOLS } from "./Piece.constants";
import "./Piece.css";
import type { PieceType } from "./Piece.types";

export default function Piece({ type }: PieceType) {
  return type ? <span className="piece">{PIECE_SYMBOLS[type]}</span> : <></>;
}
