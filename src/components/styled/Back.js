import styled from 'styled-components';

const Back = styled.button`
  margin-bottom: 1rem;
  background-color: transparent;
  padding: 0;
  border: none;
  color: ${({ theme }) => theme.colors.neutral100};
  opacity: 0.875;
  cursor: pointer;
`;

export default Back;
