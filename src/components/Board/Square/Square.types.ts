import type { PIECE_TYPES } from "../Board.constants";

export interface PieceType {
  type?: (typeof PIECE_TYPES)[keyof typeof PIECE_TYPES];
}

export interface SquareType extends PieceType {
  squareId: string;
}
