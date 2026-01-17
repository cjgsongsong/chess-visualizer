import type { PIECE_TYPES } from "../Board.constants";

export interface SquareType {
  pieceType?: (typeof PIECE_TYPES)[keyof typeof PIECE_TYPES];
  squareId: string;
}
