import styled from 'styled-components';

const Next = styled.button`
  display: block;
  background: linear-gradient(to right, hsl(198, 60%, 50%), hsl(176, 68%, 64%));
  margin: 2rem auto;
  padding: 0.875rem 2.5rem;
  border: none;
  border-radius: 2.5rem;
  color: hsl(0, 0%, 100%);
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    filter: opacity(0.625);
  }
`;

export default Next;
