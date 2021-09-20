import styled from 'styled-components';

const QuestionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['400']};

  @media (min-width: 60rem) {
    font-size: ${({ theme }) => theme.fontSizes['500']};
  }
`;

export default QuestionTitle;
