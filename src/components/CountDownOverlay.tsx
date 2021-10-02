import { useSelector } from 'react-redux';

import { Focus } from '../store/cycle';
import styles from '../styles/Home.module.css';

// type Props = {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CountDownOverlay = (): JSX.Element => {
  const { remainingCount } = useSelector((state: { focus: Focus }) => state.focus);
  return (
    remainingCount !== null ?
      <p className={styles.overlay}>{remainingCount}</p> :
      <></>
  )
};
