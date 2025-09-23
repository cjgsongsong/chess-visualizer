import type { PIECE_TYPES } from "./Board.constants";

export interface Configuration {
  [squareId: string]: (typeof PIECE_TYPES)[keyof typeof PIECE_TYPES];
}
