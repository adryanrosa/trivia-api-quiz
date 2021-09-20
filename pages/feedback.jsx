import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import styled, { ThemeProvider } from 'styled-components';

import Happy from '../public/images/happy.svg';
import Sad from '../public/images/sad.svg';

const Main = styled.main`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes['500']};
  padding: 2rem;

  h2 {
    font-size: ${({ theme }) => theme.fontSizes['900']};
  }
  
  .image-container {
    max-width: 25rem;
    margin: 2rem auto;
  }

  .message {
    color: ${({ theme }) => (theme.goodScore ? '#84DD63' : '#F21B3F')};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    opacity: 0.875;
  }
`;

const Button = styled.button`
  display: block;
  border: none;
  background: linear-gradient(to right, hsl(198, 60%, 50%), hsl(176, 68%, 64%));
  color: ${({ theme }) => theme.colors.neutral100};
  font-weight: ${({ theme }) => theme.fontWeights.bold};;
  margin: 0.75rem auto;
  cursor: pointer;
  padding: 0.5rem;
  width: 13.75rem;
  border-radius: 0.25rem;
  
  &:hover {
    filter: opacity(0.8);
  }
`;

function Feedback() {
  const { name, assertions, points } = useSelector(({ user }) => user);
  const goodScore = assertions > 2;

  useEffect(() => {
    const newRank = {
      name: name || 'Guest',
      points,
    };

    const storedRanking = JSON.parse(localStorage.getItem('ranking'));
    if (storedRanking) {
      localStorage.setItem('ranking', JSON.stringify([...storedRanking, newRank]));
    } else {
      localStorage.setItem('ranking', JSON.stringify([newRank]));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={ { goodScore } }>
      <Main>
        <h2 className="message">
          {
            goodScore
              ? 'Nice job!'
              : 'Better luck next time...'
          }
        </h2>

        <div className="image-container">
          <Image src={ goodScore ? Happy : Sad } />
        </div>

        <p>
          You&apos;ve got
          {' '}
          <span className="message">{assertions}</span>
          {' '}
          {assertions === 1 ? 'question' : 'questions'}
          {' '}
          right
        </p>

        <p>
          Your score was
          {' '}
          <span className="message">{points}</span>
        </p>

        <Link href="/quizz"><Button>Play Again</Button></Link>
        <Link href="/ranking"><Button>Ranking</Button></Link>
      </Main>
    </ThemeProvider>
  );
}

export default Feedback;
