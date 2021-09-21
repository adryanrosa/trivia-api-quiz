import Rank from './styled/Rank';

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
