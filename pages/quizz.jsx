import dynamic from 'next/dynamic';
import styled from 'styled-components';

export async function getServerSideProps() {
  const url = 'https://opentdb.com/api.php?amount=5&encode=base64';
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      questions: data,
    },
  };
}

const DynamicQuestion = dynamic(
  () => import('../src/components/Question'),
  { ssr: false },
);

const Grid = styled.main`
  max-width: 40rem;
  margin: 2rem auto 0;
  padding-left: 1rem;
  padding-right: 1rem;
  display: grid;
  gap: 2rem;

  @media (min-width: 60rem) {
    margin-top: 4rem;
    max-width: 60rem;
    padding-left: 2rem;
    padding-right: 2rem;
    grid-template-columns: 4fr 5fr;
    gap: 4rem;
  }
`;

function Quizz({ questions }) {
  return (
    <Grid>
      <DynamicQuestion questions={ questions.results } />
    </Grid>
  );
}

export default Quizz;
