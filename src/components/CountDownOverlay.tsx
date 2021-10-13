import { useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';

import { Focus } from '../store/cycle';
import styles from '../styles/Home.module.css';

export const CountDownOverlay = (): JSX.Element => {
  const { remainingCount, isRunning } = useSelector((state: { focus: Focus }) => state.focus);

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <>
      {[...Array(11).keys()].map((i) => (
        <Transition key={i} in={isRunning && remainingCount === i} timeout={300}>
          {(state) => (
            <p style={{ ...transitionStyles[state] }} className={`${styles.fade} } ${styles.overlay}`}>
              {i}
            </p>
          )}
        </Transition>
      ))}
    </>
  );
};
