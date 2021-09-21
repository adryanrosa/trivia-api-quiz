import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { setCategory, setDifficulty } from '../src/redux/actions';

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

function Settings({ categories }) {
  const [categoryState, setCategoryState] = useState('');
  const [difficultyState, setDifficultyState] = useState('');

  const difficulties = ['easy', 'medium', 'hard'];

  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <main>
      Settings

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
          <select
            id="category"
            value={ categoryState }
            onChange={ ({ target }) => setCategoryState(target.value) }
          >
            <option value="">Any</option>
            {categories.map(({ name, id }) => (
              <option value={ id } key={ id }>{name}</option>
            ))}
          </select>
        </label>

        <label htmlFor="difficulty">
          Difficulty
          <select
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
          </select>

          <button type="submit">Apply</button>
        </label>
      </form>
    </main>
  );
}

export default Settings;
