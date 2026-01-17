import {
  DEFAULT_SQUARE_PROPS,
  FILE_IDS,
  PIECE_TYPES,
  RANK_IDS,
} from "./Board.constants";
import type { Configuration, Targets } from "./Board.types";
import type { SquareType } from "./Square";

function getSquareIdIndices(squareId: string) {
  const [fileId, rankId] = squareId.split("");

  return [FILE_IDS.indexOf(fileId), RANK_IDS.indexOf(rankId)];
}

function getBlackPawnTargets(squareId: string) {
  const [fileIdIndex, rankIdIndex] = getSquareIdIndices(squareId);
  const nextRankIdIndex = rankIdIndex + 1;
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

function getTargets(configuration: Configuration) {
  return Object.entries(configuration).reduce((prev, [key, value]) => {
    switch (value) {
      case PIECE_TYPES.BLACK_PAWN:
        return { ...prev, [key]: getBlackPawnTargets(key) };
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
