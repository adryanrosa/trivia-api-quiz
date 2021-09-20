import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  background-color: transparent;
  padding: 1em 0.5rem;
  border: none;
  border-bottom: 0.0625rem solid hsla(0, 0%, 100%, 62.5%);
  border-radius: 0.125rem;
  color: ${({ theme }) => theme.colors.neutral100};

  &:focus {
    outline: none;
  }
`;

export default Input;
