import styled from 'styled-components';

const Back = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.neutral800};
  padding: 0.375rem 1rem 0.5rem;
  border: none;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.neutral100};
  opacity: 0.875;
  cursor: pointer;

  span {
    margin-top: 0.125rem;
  }
`;

export default Back;
