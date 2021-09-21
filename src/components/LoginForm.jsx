import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import Input from './styled/Input';
import Label from './styled/Label';
import Play from './styled/Play';
import { addName } from '../redux/actions';

function LoginForm() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [name, setName] = useState('');

  return (
    <form
      onSubmit={ (event) => {
        event.preventDefault();

        dispatch(addName(name));
        router.push('/quizz');
      } }
    >
      <Label>
        WHAT DO YOU WAN&apos;T DO BE CALLED?
        <Input
          type="text"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />
      </Label>

      <Play type="submit" disabled={ !name }>
        Play
      </Play>
    </form>
  );
}

export default LoginForm;
