import styled from 'styled-components';

const Rank = styled.div`
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.neutral900};
  opacity: 0.75;

  &:nth-of-type(2n) {
    background-color: ${({ theme }) => theme.colors.neutral600};
  }
  &:not(:last-of-type) {
    border-bottom: 1px solid hsla(0, 0%, 100%, 62.5%);
  }
`;

function Ranks() {
  const ranking = JSON.parse(localStorage.getItem('ranking'));

  return (
    <div>
      {ranking && ranking
        .sort((a, b) => b.score - a.score)
        .map(({ name, points }, index) => (
          <Rank key={ index }>
            <p>{`${name} - ${points} points`}</p>
          </Rank>
        ))}
    </div>
  );
}

export default Ranks;
