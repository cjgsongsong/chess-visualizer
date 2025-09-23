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

export const SQUARE_IDS = Object.freeze(
  FILE_IDS.reduce(
    (ids, fileId) => [
      ...ids,
      ...RANK_IDS.map((rankId) => `${fileId}${rankId}`),
    ],
    [] as string[]
  )
);
