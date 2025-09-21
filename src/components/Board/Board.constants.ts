export const COLUMN_IDS = [...'ABCDEFGH'];
export const ROW_IDS = [...'87654321'];

export const SQUARE_IDS = COLUMN_IDS.reduce(
  (ids, columnId) => [
    ...ids,
    ...ROW_IDS.map(rowId => `${columnId}${rowId}`),
  ],
  [] as string[],
);
