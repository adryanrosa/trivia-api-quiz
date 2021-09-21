import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import Settings from '../src/components/styled/Settings';
import Guest from '../src/components/styled/Guest';
import ImageQuizz from '../public/images/quizz.svg';
import LoginForm from '../src/components/LoginForm';
import IconSettings from '../public/icons/settings.svg';
import { addName } from '../src/redux/actions';

const Main = styled.main`
  padding: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-top: 4rem;
  }

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
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Main>
      <div className="container">
        <div className="image-container">
          <Image src={ ImageQuizz } />
        </div>

        <LoginForm />

        <Guest
          onClick={ () => {
            dispatch(addName(''));
            router.push('/quizz');
          } }
        >
          Play as guest
        </Guest>

        <Link href="/settings">
          <Settings>
            <Image src={ IconSettings } alt="setttings" />
          </Settings>
        </Link>
      </div>
    </Main>
  );
}
