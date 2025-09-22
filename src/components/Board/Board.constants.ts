import { FILE_IDS, RANK_IDS } from './Square';

export const SQUARE_IDS = FILE_IDS.reduce(
  (ids, fileId) => [
    ...ids,
    ...RANK_IDS.map(rankId => `${fileId}${rankId}`),
  ],
  [] as string[],
);
