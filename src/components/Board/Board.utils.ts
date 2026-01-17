import {
  DEFAULT_SQUARE_PROPS,
  FILE_IDS,
  PIECE_TYPES,
  PLAYERS,
  RANK_IDS,
} from "./Board.constants";
import type { Configuration, GetPawnTargetsType, Targets } from "./Board.types";
import type { SquareType } from "./Square";

function getSquareIdIndices(squareId: string) {
  const [fileId, rankId] = squareId.split("");

  return [FILE_IDS.indexOf(fileId), RANK_IDS.indexOf(rankId)];
}

function getKingTargets(squareId: string) {
  const [fileIdIndex, rankIdIndex] = getSquareIdIndices(squareId);
  const targets: string[] = [];

  const indexChanges: number[][] = [];
  for (
    let fileIdIndexChange = -1;
    fileIdIndexChange <= 1;
    fileIdIndexChange++
  ) {
    for (
      let rankIdIndexChange = -1;
      rankIdIndexChange <= 1;
      rankIdIndexChange++
    ) {
      if (fileIdIndexChange === 0 && rankIdIndexChange === 0) continue;
      indexChanges.push([fileIdIndexChange, rankIdIndexChange]);
    }
  }

  indexChanges.forEach(([fileIdIndexChange, rankIdIndexChange]) => {
    const nextFileIdIndex = fileIdIndex + fileIdIndexChange;
    const nextRankIdIndex = rankIdIndex + rankIdIndexChange;

    if (
      !(
        nextFileIdIndex < 0 ||
        nextFileIdIndex === FILE_IDS.length ||
        nextRankIdIndex < 0 ||
        nextRankIdIndex === RANK_IDS.length
      )
    )
      targets.push(`${FILE_IDS[nextFileIdIndex]}${RANK_IDS[nextRankIdIndex]}`);
  });

  return targets;
}

function getPawnTargets({ player, squareId }: GetPawnTargetsType) {
  const [fileIdIndex, rankIdIndex] = getSquareIdIndices(squareId);
  const nextRankIdIndex = rankIdIndex + (player === PLAYERS.BLACK ? 1 : -1);
  const targets: string[] = [];

  if (nextRankIdIndex === RANK_IDS.length) return targets;

  const previousFileIdIndex = fileIdIndex - 1;
  const nextFileIdIndex = fileIdIndex + 1;

  if (previousFileIdIndex >= 0)
    targets.push(
      `${FILE_IDS[previousFileIdIndex]}${RANK_IDS[nextRankIdIndex]}`,
    );
  if (nextFileIdIndex < FILE_IDS.length)
    targets.push(`${FILE_IDS[nextFileIdIndex]}${RANK_IDS[nextRankIdIndex]}`);

  return targets;
}

function getRookTargets(squareId: string) {
  const [fileId, rankId] = squareId.split("");
  const targets: string[] = [];

  for (let fileIdIndex = 0; fileIdIndex < FILE_IDS.length; fileIdIndex++) {
    const candidateTarget = `${FILE_IDS[fileIdIndex]}${rankId}`;

    if (squareId !== candidateTarget) targets.push(candidateTarget);
  }

  for (let rankIdIndex = 0; rankIdIndex < RANK_IDS.length; rankIdIndex++) {
    const candidateTarget = `${fileId}${RANK_IDS[rankIdIndex]}`;

    if (squareId !== candidateTarget) targets.push(candidateTarget);
  }

  return targets;
}

function getTargets(configuration: Configuration) {
  return Object.entries(configuration).reduce((prev, [key, value]) => {
    switch (value) {
      case PIECE_TYPES.BLACK_KING:
      case PIECE_TYPES.WHITE_KING:
        return {
          ...prev,
          [key]: getKingTargets(key),
        };
      case PIECE_TYPES.BLACK_PAWN:
        return {
          ...prev,
          [key]: getPawnTargets({ player: PLAYERS.BLACK, squareId: key }),
        };
      case PIECE_TYPES.BLACK_ROOK:
      case PIECE_TYPES.WHITE_ROOK:
        return {
          ...prev,
          [key]: getRookTargets(key),
        };
      case PIECE_TYPES.WHITE_PAWN:
        return {
          ...prev,
          [key]: getPawnTargets({ player: PLAYERS.WHITE, squareId: key }),
        };
      default:
        return { ...prev, [key]: [] };
    }
  }, {} as Targets);
}

export function getSquareProps(configuration: Configuration) {
  const targets = getTargets(configuration);

  return DEFAULT_SQUARE_PROPS.map((baseSquareProps) => {
    let squareProps: SquareType = baseSquareProps;
    const { squareId } = baseSquareProps;

    if (configuration[squareId])
      squareProps.pieceType = configuration[squareId];
    if (targets[squareId]) squareProps.targets = targets[squareId];

    return squareProps;
  });
}
