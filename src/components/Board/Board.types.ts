import type { PLAYERS, PIECE_TYPES } from "./Board.constants";

export interface Configuration {
  [squareId: string]: (typeof PIECE_TYPES)[keyof typeof PIECE_TYPES];
}

export interface GetPawnTargetsType {
  player: (typeof PLAYERS)[keyof typeof PLAYERS];
  squareId: string;
}

export interface Targets {
  [squareId: string]: string[];
}
