import { PIECE_TYPES } from "../../Board.constants";
import type { PieceType } from "../Square.types";
import { PIECE_SYMBOLS } from "./Piece.constants";
import "./Piece.css";

export default ({ type }: PieceType) =>
  type && type in PIECE_TYPES ? (
    <div className="piece">{PIECE_SYMBOLS[type]}</div>
  ) : (
    <></>
  );
