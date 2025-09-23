import { PIECE_TYPES } from "../../Board.constants";

export const PIECE_SYMBOLS = {
  [PIECE_TYPES.BISHOP]: "♗",
  [PIECE_TYPES.KING]: "♔",
  [PIECE_TYPES.KNIGHT]: "♘",
  [PIECE_TYPES.PAWN]: "♙",
  [PIECE_TYPES.QUEEN]: "♕",
  [PIECE_TYPES.ROOK]: "♖",
} as const;
