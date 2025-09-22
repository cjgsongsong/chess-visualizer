import { 
  FILE_IDS, 
  LABEL_TYPES, 
  RANK_IDS,
} from '../Board.constants';
import styles from './Labels.module.css';
import type { LabelsType } from './Labels.types';

export default ({ type } : LabelsType) => {
  const ids = type === LABEL_TYPES.FILE
    ? FILE_IDS 
    : RANK_IDS;
  
  const labelsClass = `${styles.labels} ${
    type === LABEL_TYPES.FILE
      ? styles.file
      : styles.rank
  }`;
  
  return (
    <div className={labelsClass}>
      {
        ids.map(id => (
          <div className={styles.label}>
            {id}
          </div>
        ))
      }
    </div>
  );
};
