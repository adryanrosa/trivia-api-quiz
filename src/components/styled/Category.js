import styled from 'styled-components';

const Category = styled.h2`
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSizes['700']};
  color: hsla(0, 0%, 100%, 62.5%);
  border-bottom: 0.0625rem dashed hsla(0, 0%, 100%, 62.5%); 

  @media (min-width: 60rem) {
    font-size: ${({ theme }) => theme.fontSizes['800']};
  }
`;

export default Category;
