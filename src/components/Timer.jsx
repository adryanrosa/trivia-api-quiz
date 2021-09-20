import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { decreaseTime } from '../redux/actions';

function Timer() {
  const dispatch = useDispatch();
  const { over, time } = useSelector(({ timer }) => timer);

  useEffect(() => {
    const SECOND = 1000;

    setInterval(() => {
      if (!over) {
        return dispatch(decreaseTime());
      }
    }, SECOND);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <p>
      {time}
    </p>
  );
}

export default Timer;
