import styled from 'styled-components';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.neutral800};

  .container {
    max-width: 70rem;
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 60rem) {
    padding: 1.5rem;
  }
  }
  
  .player {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

function Header() {
  const { name, points } = useSelector(({ user }) => user);

  return (
    <StyledHeader>
      <div className="container">
        <div className="player">
          <Image src="/images/avatar.svg" width={ 40 } height={ 40 } alt="Avatar" />
          {name || 'Guest'}
        </div>

        <p>
          {points}
          {' '}
          points
        </p>
      </div>
    </StyledHeader>
  );
}

export default Header;
