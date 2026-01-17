import type { SquareType } from "../Square.types";

export type PieceType = Required<Pick<SquareType, "type">>;
