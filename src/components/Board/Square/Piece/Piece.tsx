import type { PieceType } from "../Square.types";
import { PIECE_SYMBOLS } from "./Piece.constants";
import "./Piece.css";

export default ({ type }: PieceType) =>
  type ? <div className="piece">{PIECE_SYMBOLS[type]}</div> : <></>;
