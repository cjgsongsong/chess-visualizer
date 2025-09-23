import type { SquareType } from "./Square/Square.types";

export const FILE_IDS = [..."ABCDEFGH"] as const;

export const LABEL_TYPES = {
  FILE: "file",
  RANK: "rank",
} as const;

export const PIECE_TYPES = {
  BISHOP: "bishop",
  KING: "king",
  KNIGHT: "knight",
  PAWN: "pawn",
  QUEEN: "queen",
  ROOK: "rook",
} as const;

export const RANK_IDS = [..."87654321"] as const;

export const DEFAULT_CONFIGURATION = {
  A1: PIECE_TYPES.ROOK,
  A2: PIECE_TYPES.PAWN,
  A7: PIECE_TYPES.PAWN,
  A8: PIECE_TYPES.ROOK,
  B1: PIECE_TYPES.KNIGHT,
  B2: PIECE_TYPES.PAWN,
  B7: PIECE_TYPES.PAWN,
  B8: PIECE_TYPES.KNIGHT,
  C1: PIECE_TYPES.BISHOP,
  C2: PIECE_TYPES.PAWN,
  C7: PIECE_TYPES.PAWN,
  C8: PIECE_TYPES.BISHOP,
  D1: PIECE_TYPES.QUEEN,
  D2: PIECE_TYPES.PAWN,
  D7: PIECE_TYPES.PAWN,
  D8: PIECE_TYPES.QUEEN,
  E1: PIECE_TYPES.KING,
  E2: PIECE_TYPES.PAWN,
  E7: PIECE_TYPES.PAWN,
  E8: PIECE_TYPES.KING,
  F1: PIECE_TYPES.BISHOP,
  F2: PIECE_TYPES.PAWN,
  F7: PIECE_TYPES.PAWN,
  F8: PIECE_TYPES.BISHOP,
  G1: PIECE_TYPES.KNIGHT,
  G2: PIECE_TYPES.PAWN,
  G7: PIECE_TYPES.PAWN,
  G8: PIECE_TYPES.KNIGHT,
  H1: PIECE_TYPES.ROOK,
  H2: PIECE_TYPES.PAWN,
  H7: PIECE_TYPES.PAWN,
  H8: PIECE_TYPES.ROOK,
};

export const DEFAULT_SQUARE_PROPS = RANK_IDS.reduce(
  (ids, rankId) => [
    ...ids,
    ...FILE_IDS.map((fileId) => ({ squareId: `${fileId}${rankId}` })),
  ],
  [] as SquareType[]
);
