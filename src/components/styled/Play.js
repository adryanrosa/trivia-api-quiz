import styled from 'styled-components';

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

export default Play;
