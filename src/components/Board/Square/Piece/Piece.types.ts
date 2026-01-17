import type { SquareType } from "../Square.types";

export type PieceType = Required<Omit<SquareType, "squareId">>;
