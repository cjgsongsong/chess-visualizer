import { BASE_PIECE_TYPES, PIECE_TYPES } from "./Board.constants";

export type PieceTypeType =
  | Exclude<
      (typeof BASE_PIECE_TYPES)[keyof typeof BASE_PIECE_TYPES],
      typeof BASE_PIECE_TYPES.PAWN
    >
  | typeof PIECE_TYPES.BLACK_PAWN
  | typeof PIECE_TYPES.WHITE_PAWN;

export interface Configuration {
  [squareId: string]: (typeof PIECE_TYPES)[keyof typeof PIECE_TYPES];
}

export interface GetTargetsByPieceTypeType {
  pieceType: PieceTypeType;
  squareId: string;
}

export interface Targets {
  [squareId: string]: string[];
}
