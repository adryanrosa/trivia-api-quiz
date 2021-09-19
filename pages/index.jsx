import styled from 'styled-components';

const Main = styled.main`
  color: ${(props) => props.theme.color};
`;

export default function Home() {
  return (
    <Main>
      Hey
    </Main>
  );
}
