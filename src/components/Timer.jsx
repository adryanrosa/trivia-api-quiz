import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

import { decreaseTime } from '../redux/actions';

const MAX_TIME = 30;
const Container = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 1rem;
  padding: 0.625rem;
  border: 2px solid hsla(0, 0%, 100%, 18.75%);
  border-radius: 1.5rem;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  &::after {
    content: '';
    position: absolute;
    top: 0.125rem;
    left: 0.125rem;
    width: ${({ theme: { time } }) => `calc(${(time / MAX_TIME) * 100}% - 0.25rem)`};
    height: calc(100% - 0.25rem);
    background: linear-gradient(to right, #f27121, #e94057, #8a2387);
    border-radius: 1.5rem;
    z-index: -100;
  }
`;

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
      <ThemeProvider theme={ { time } }>
        <Container>
          <span>{time}</span>
        </Container>
      </ThemeProvider>
    </p>
  );
}

export default Timer;
