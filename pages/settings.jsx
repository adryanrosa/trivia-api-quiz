import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { setCategory, setDifficulty } from '../src/redux/actions';
import Button from '../src/components/styled/Button';

export async function getStaticProps() {
  const url = 'https://opentdb.com/api_category.php';
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      categories: data.trivia_categories,
    },
  };
}

const Main = styled.main`
  padding: 2rem;
  max-width: 37.5rem;
  margin-left: auto;
  margin-right: auto;

  h2 {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes['900']};
    margin-bottom: 0.75rem;
  }

  button {
    width: 100%;
    margin-top: 3rem;
    padding: 0.625rem;
  }
`;

const Select = styled.select`
  background-color: ${({ theme }) => theme.colors.neutral800};
  color: ${({ theme }) => theme.colors.neutral100};
  border: none;
  display: block;
  width: 100%;
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin-top: 0.25rem;
  margin-bottom: 0.875rem;
  border-radius: 0.25rem;

  & {
    -moz-appearance:none;
    -webkit-appearance:none;
    appearance:none;
}

  &:focus {
    outline: none;
  }
`;

function Settings({ categories }) {
  const [categoryState, setCategoryState] = useState('');
  const [difficultyState, setDifficultyState] = useState('');

  const difficulties = ['easy', 'medium', 'hard'];

  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Main>
      <h2>Settings</h2>

      <form
        onSubmit={ (event) => {
          event.preventDefault();

          dispatch(setCategory(categoryState));
          dispatch(setDifficulty(difficultyState));
          router.push('/');
        } }
      >
        <label htmlFor="category">
          Category
          <Select
            id="category"
            value={ categoryState }
            onChange={ ({ target }) => setCategoryState(target.value) }
          >
            <option value="">Any</option>
            {categories.map(({ name, id }) => (
              <option value={ id } key={ id }>{name}</option>
            ))}
          </Select>
        </label>

        <label htmlFor="difficulty">
          Difficulty
          <Select
            id="difficulty"
            value={ difficultyState }
            onChange={ ({ target }) => setDifficultyState(target.value) }
          >
            <option value="">Any</option>
            {difficulties.map((curr) => (
              <option value={ curr } key={ curr }>
                {curr.charAt(0).toUpperCase() + curr.slice(1)}
              </option>
            ))}
          </Select>

          <Button type="submit">Apply</Button>
        </label>
      </form>
    </Main>
  );
}

export default Settings;
