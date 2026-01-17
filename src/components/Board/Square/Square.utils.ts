import { FILE_IDS, RANK_IDS } from "../Board.constants";

export function addSpace(className: string) {
  return className ? `${className} ` : "";
}

export function getSquareType(squareId: string) {
  const [fileId, rankId] = squareId.split("");

  const isFileIdEven = FILE_IDS.indexOf(fileId) % 2;
  const isRankIdEven = RANK_IDS.indexOf(rankId) % 2;

  return isFileIdEven ^ isRankIdEven ? "dark" : "light";
}
