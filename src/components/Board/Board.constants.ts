import { COLUMN_IDS, ROW_IDS } from './Square';

export const SQUARE_IDS = COLUMN_IDS.reduce(
  (ids, columnId) => [
    ...ids,
    ...ROW_IDS.map(rowId => `${columnId}${rowId}`),
  ],
  [] as string[],
);
