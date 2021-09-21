import styled from 'styled-components';

const Button = styled.button`
  display: block;
  border: none;
  background: linear-gradient(to right, hsl(198, 60%, 50%), hsl(176, 68%, 64%));
  color: ${({ theme }) => theme.colors.neutral100};
  font-weight: ${({ theme }) => theme.fontWeights.bold};;
  margin: 0.75rem auto;
  cursor: pointer;
  padding: 0.5rem;
  width: 13.75rem;
  border-radius: 0.25rem;
  
  @media (hover: hover) {
    &:hover {
      filter: opacity(0.8);
    }
  }
`;

export default Button;
