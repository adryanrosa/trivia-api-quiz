import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import Category from './styled/Category';
import QuestionTitle from './styled/QuestionTitle';
import Answer from './styled/Answer';
import Next from './styled/Next';
import Timer from './Timer';
import { setOver, resetTime, addAssertion, addPoints } from '../redux/actions';

function Question({ questions }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { over, time } = useSelector(({ timer }) => timer);

  const [currQuestion, setCurrQuestion] = useState(0);

  const generateAnswers = (correct, incorrect) => [
    { answer: correct, id: 'correct' },
    ...incorrect.map((item) => ({ answer: item })),
  ].sort((a, b) => a.answer.localeCompare(b.answer));

  useEffect(() => {
    dispatch(resetTime());
    dispatch(setOver(false));
  }, [dispatch, currQuestion]);

  useEffect(() => {
    if (time < 1) {
      dispatch(setOver(true));
    }
  }, [dispatch, time]);

  return (
    <>
      <div>
        <Timer />
        <Category>{window.atob(questions[currQuestion].category)}</Category>
        <QuestionTitle>{window.atob(questions[currQuestion].question)}</QuestionTitle>
      </div>

      <div>
        {
          generateAnswers(questions[currQuestion].correct_answer,
            questions[currQuestion].incorrect_answers)
            .map(({ answer, id }, index) => (
              <ThemeProvider theme={ { over, id } } key={ index }>
                <Answer
                  type="button"
                  disabled={ over }
                  onClick={ () => {
                    dispatch(setOver(true));

                    const DEFAULT_POINTS = 10;
                    const difficultyPoints = {
                      hard: 3,
                      medium: 2,
                      easy: 1,
                    };

                    if (id === 'correct') {
                      const points = DEFAULT_POINTS
                      + (time * difficultyPoints[atob(questions[currQuestion]
                        .difficulty)]);

                      dispatch(addAssertion());
                      dispatch(addPoints(points));
                    }
                  } }
                >
                  {window.atob(answer)}
                </Answer>
              </ThemeProvider>
            ))
        }

        <Next
          disabled={ !over }
          onClick={ () => {
            const LAST_QUESTION = 4;
            if (currQuestion < LAST_QUESTION) {
              setCurrQuestion(currQuestion + 1);
            } else {
              router.push('/feedback');
            }
          } }
        >
          Next Question
        </Next>
      </div>
    </>
  );
}

export default Question;
