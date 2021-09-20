import styled from 'styled-components';
import Image from 'next/image';

import ImageQuizz from '../public/images/quizz.svg';
import LoginForm from '../src/components/LoginForm';

const Main = styled.main`
  padding: 2rem 1rem;

  .container {
    max-width: 27.5rem;
    margin-left: auto;
    margin-right: auto;
    background-color: ${({ theme }) => theme.colors.neutral800};
    padding: 2rem;
    border-radius: 0.375rem;
  }

  .image-container {
    margin-bottom: 3rem;
  }
`;

export default function Home() {
  return (
    <Main>
      <div className="container">
        <h1>Hey</h1>
        <div className="image-container">
          <Image src={ ImageQuizz } />
        </div>

        <LoginForm />
      </div>
    </Main>
  );
}
