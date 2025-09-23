export const FILE_IDS = [..."ABCDEFGH"];

export const LABEL_TYPES = {
  FILE: "file",
  RANK: "rank",
};

export const RANK_IDS = [..."87654321"];

export const SQUARE_IDS = FILE_IDS.reduce(
  (ids, fileId) => [...ids, ...RANK_IDS.map((rankId) => `${fileId}${rankId}`)],
  [] as string[]
);
