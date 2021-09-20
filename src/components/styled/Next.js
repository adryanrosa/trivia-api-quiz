import styled from 'styled-components';

const Next = styled.button`
  display: block;
  background: linear-gradient(to right, hsl(198, 60%, 50%), hsl(176, 68%, 64%));
  margin: 2rem auto;
  padding: 0.875rem 2.5rem;
  border: none;
  border-radius: 2.5rem;
  color: ${({ theme }) => theme.colors.neutral100};
  font-size: ${({ theme }) => theme.fontSizes['500']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  cursor: pointer;

  &:disabled {
    filter: opacity(0.625);
  }
`;

export default Next;
