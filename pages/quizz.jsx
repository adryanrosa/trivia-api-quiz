import dynamic from 'next/dynamic';

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

function Quizz({ questions }) {
  return (
    <main>
      <DynamicQuestion questions={ questions.results } />
    </main>
  );
}

export default Quizz;
