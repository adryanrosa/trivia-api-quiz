import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import Header from '../src/components/Header';
import Back from '../src/components/styled/Back';
import IconHome from '../public/icons/home.svg';

const DynamicRanks = dynamic(
  () => import('../src/components/Ranks'),
  { ssr: false },
);

const Main = styled.main`
  padding: 2rem;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

function Ranking() {
  return (
    <>
      <Header />
      <Main>
        <h2>Ranking</h2>
        <Link href="/">
          <Back>
            <Image src={ IconHome } alt="Home" />
            <span>Home</span>
          </Back>
        </Link>

        <DynamicRanks />
      </Main>
    </>
  );
}

export default Ranking;
