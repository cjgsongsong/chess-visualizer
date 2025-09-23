import type { LABEL_TYPES } from "../Board.constants";

export interface LabelsType {
  type: (typeof LABEL_TYPES)[keyof typeof LABEL_TYPES];
}
