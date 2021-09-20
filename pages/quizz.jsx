import Question from '../src/components/Question';

export async function getServerSideProps() {
  const url = 'https://opentdb.com/api.php?amount=5';
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      questions: data,
    },
  };
}

function Quizz({ questions }) {
  return (
    <main>
      <Question questions={ questions.results } />
    </main>
  );
}

export default Quizz;
