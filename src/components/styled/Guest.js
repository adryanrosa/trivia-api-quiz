import styled from 'styled-components';

const Guest = styled.button`
  margin-top: 0.625rem;
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes['300']};
  color: ${({ theme }) => theme.colors.neutral100};
  opacity: 0.625;
`;

export default Guest;
