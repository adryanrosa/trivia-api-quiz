/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { addName } from '../../redux/actions';

const Input = styled.input`
  width: 100%;
  margin-top: 0.25rem;
  background-color: transparent;
  padding: 1em 0.5rem;
  border: none;
  border-bottom: 1px solid hsla(0, 0%, 100%, 62.5%);
  border-radius: 0.125rem;
  color: ${({ theme }) => theme.colors.neutral100};

  &:focus {
    outline: none;
  }
`;

const Play = styled.button`
  display: block;
  width: 100%;
  border: none;
  background: linear-gradient(to right, hsl(198, 60%, 50%), hsl(176, 68%, 64%));
  color: ${({ theme }) => theme.colors.neutral100};
  font-size: ${({ theme }) => theme.fontSizes['500']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 2rem;
  margin-top: 3rem;

  &:disabled {
    filter: opacity(0.5);
  }
`;

function LoginForm() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addName(name));
    router.push('/quizz');
  };

  return (
    <form onSubmit={ (event) => handleSubmit(event) }>
      <label>
        What do you want to be called?
        <Input
          type="text"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />
      </label>

      <Play type="submit" disabled={ !name }>
        Play
      </Play>
    </form>
  );
}

export default LoginForm;
