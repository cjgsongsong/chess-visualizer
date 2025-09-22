import { FILE_IDS, RANK_IDS } from './Square.constants';

export const getSquareColor = (squareId: string) => {
  const [fileId, rankId] = squareId.split('');

  return (
    (
      FILE_IDS.indexOf(fileId) % 2 
      ^ RANK_IDS.indexOf(rankId) % 2
    )
      ? 'black'
      : 'white'
  );
};
