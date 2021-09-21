import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Header from '../src/components/Header';

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

function Quizz() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const { category, difficulty } = useSelector(({ settings }) => settings);

  useEffect(() => {
    const fetchQuestions = async () => {
      const url = `https://opentdb.com/api.php?amount=5&encode=base64&category=${category}&difficulty=${difficulty}`;
      const res = await fetch(url);
      const data = await res.json();
      setQuestions(data);
      setLoading(false);
    };

    fetchQuestions();
  }, [category, difficulty]);

  if (loading) return 'Loading';

  return (
    <>
      <Header />
      <Grid>
        <DynamicQuestion questions={ questions.results } />
      </Grid>
    </>
  );
}

export default Quizz;
