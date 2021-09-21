import styled from 'styled-components';
import Link from 'next/link';
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

const Settings = styled.button`
  display: block;
  margin-left: auto;
  margin-top: 0.625rem;
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral100};
  opacity: 0.625;
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
        <Link href="/settings">
          <Settings>Settings</Settings>
        </Link>
      </div>
    </Main>
  );
}
