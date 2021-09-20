import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import styled from 'styled-components';

import Happy from '../public/images/happy.svg';
import Sad from '../public/images/sad.svg';

const Main = styled.main`
  text-align: center;

  .image-container {
    max-width: 20rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

function Feedback() {
  const { name, assertions, points } = useSelector(({ user }) => user);

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
    <Main>
      <h2>Your score</h2>

      <div className="image-container">
        <Image src={ assertions > 2 ? Happy : Sad } />
      </div>

      <p>
        {`You've got ${assertions} ${assertions === 1
          ? 'question' : 'questions'} right`}
      </p>
      <p>{`You scored ${points} points`}</p>
    </Main>
  );
}

export default Feedback;
