import { COLUMN_IDS, ROW_IDS } from "./Board.constants";

export const getSquareColor = (squareId: string) => {
  const [columnId, rowId] = squareId.split('');

  return (
    (
      COLUMN_IDS.indexOf(columnId) % 2 
      ^ ROW_IDS.indexOf(rowId) % 2
    )
      ? 'black'
      : 'white'
  );
};
