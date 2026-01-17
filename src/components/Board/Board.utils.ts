import { DEFAULT_SQUARE_PROPS } from "./Board.constants";
import type { Configuration } from "./Board.types";

export function getSquareProps(configuration: Configuration) {
  return DEFAULT_SQUARE_PROPS.map((squareProps) => {
    const { squareId } = squareProps;

    return configuration[squareId]
      ? { pieceType: configuration[squareId], squareId }
      : squareProps;
  });
}
