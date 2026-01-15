import type { PieceType } from "../Square.types";
import { PIECE_SYMBOLS } from "./Piece.constants";
import "./Piece.css";

export default function Piece({ type }: PieceType) {
  return type ? <div className="piece">{PIECE_SYMBOLS[type]}</div> : <></>;
}
