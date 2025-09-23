import { FILE_IDS, LABEL_TYPES, RANK_IDS } from "../Board.constants";
import "./Labels.css";
import type { LabelsType } from "./Labels.types";

export default ({ type }: LabelsType) => {
  const ids = type === LABEL_TYPES.FILE ? FILE_IDS : RANK_IDS;

  const labelsClass = `${type === LABEL_TYPES.FILE ? "file" : "rank"} labels`;

  return (
    <div className={labelsClass}>
      {ids.map((id) => (
        <div className="label">{id}</div>
      ))}
    </div>
  );
};
