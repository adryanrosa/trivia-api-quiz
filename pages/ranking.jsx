import dynamic from 'next/dynamic';
import Link from 'next/link';
import styled from 'styled-components';

import Back from '../src/components/styled/Back';

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
    <Main>
      <h2>Ranking</h2>
      <Link href="/">
        <Back>Home</Back>
      </Link>

      <DynamicRanks />
    </Main>
  );
}

export default Ranking;
