import dynamic from 'next/dynamic';
import styled from 'styled-components';

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

      <DynamicRanks />
    </Main>
  );
}

export default Ranking;
