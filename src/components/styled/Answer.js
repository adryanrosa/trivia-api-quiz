import styled from 'styled-components';

const Answer = styled.button`
  opacity: ${({ theme }) => { if (theme.over) return '0.875'; }};
  border: ${({ theme }) => {
    if (theme.over) {
      return `0.1875rem solid ${theme.id === 'correct'
        ? '#84DD63' : '#F21B3F'}`;
    }

    return '0.1875rem solid hsla(198, 60%, 50%, 50%)';
  }};
  display: block;
  background-color: transparent;
  width: 100%;
  margin: 0 auto 1rem;
  max-width: 27.5rem;
  padding: 0.625rem;
  border-radius: 1rem;
  font-size: ${({ theme }) => theme.fontSizes['200']};
  color: ${({ theme }) => theme.colors.neutral100};
  cursor: pointer;

  @media (min-width: 60rem) {
    max-width: none;
  }

  @media (hover:hover) {
    &:hover {
      filter: ${({ theme }) => { if (!theme.over) return 'brightness(1.75)'; }};
    }
  }
`;

export default Answer;
