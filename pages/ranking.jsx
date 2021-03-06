import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Header from '../src/components/Header';
import Back from '../src/components/styled/Back';
import IconHome from '../public/icons/home.svg';
import { resetPoints } from '../src/redux/actions';

const DynamicRanks = dynamic(
  () => import('../src/components/Ranks'),
  { ssr: false },
);

const Main = styled.main`
  padding: 2rem;
  max-width: 70rem;
  margin-left: auto;
  margin-right: auto;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: ${({ theme }) => theme.fontSizes['900']}
  }

  .ranks {
    max-width: 40rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 0.3175rem;
    overflow: hidden;
  }
`;

function Ranking() {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <>
      <Header />
      <Main>
        <h2>Ranking</h2>
        <Back
          onClick={ () => {
            dispatch(resetPoints());
            router.push('/');
          } }
        >
          <Image src={ IconHome } alt="Home" />
          <span>Home</span>
        </Back>

        <div className="ranks">
          <DynamicRanks />
        </div>
      </Main>
    </>
  );
}

export default Ranking;
