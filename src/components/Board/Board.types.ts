import type { PLAYERS, PIECE_TYPES, BASE_PIECE_TYPES } from "./Board.constants";

export type BasePieceTypeType =
  (typeof BASE_PIECE_TYPES)[keyof typeof BASE_PIECE_TYPES];

export interface Configuration {
  [squareId: string]: (typeof PIECE_TYPES)[keyof typeof PIECE_TYPES];
}

export interface GetTargetsByBasePieceTypeType {
  basePieceType: BasePieceTypeType;
  squareId: string;
}

export interface GetPawnTargetsType {
  player: (typeof PLAYERS)[keyof typeof PLAYERS];
  squareId: string;
}

export interface Targets {
  [squareId: string]: string[];
}
