import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import Answer from './styled/Answer';
import Next from './styled/Next';

function Question({ questions }) {
  const router = useRouter();
  const { timer: { over } } = useSelector((state) => state);

  const [currQuestion, setCurrQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);

  const generateAnswers = (correct, incorrect) => [
    { answer: correct, id: 'correct' },
    ...incorrect.map((item) => ({ answer: item })),
  ].sort((a, b) => a.answer.localeCompare(b.answer));

  return (
    <div>
      {window.atob(questions[currQuestion].question)}

      {
        generateAnswers(questions[currQuestion].correct_answer,
          questions[currQuestion].incorrect_answers)
          .map(({ answer, id }, index) => (
            <ThemeProvider theme={ { answered, over, id } } key={ index }>
              <Answer
                type="button"
                disabled={ answered || over }
                onClick={ () => setAnswered(true) }
              >
                {window.atob(answer)}
              </Answer>
            </ThemeProvider>
          ))
      }

      <Next
        disabled={ !answered }
        onClick={ () => {
          const LAST_QUESTION = 4;

          if (currQuestion < LAST_QUESTION) {
            setCurrQuestion(currQuestion + 1);
            setAnswered(false);
          } else {
            router.push('/');
          }
        } }
      >
        Next Question
      </Next>
    </div>
  );
}

export default Question;
