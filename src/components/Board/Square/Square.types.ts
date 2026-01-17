import type { PIECE_TYPES } from "../Board.constants";

export interface SquareType {
  squareId: string;
  type?: (typeof PIECE_TYPES)[keyof typeof PIECE_TYPES];
}
