import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Feedback() {
  const { name, points } = useSelector(({ user }) => user);

  useEffect(() => {
    const newRank = {
      name: name || 'Guest',
      points,
    };

    const storedRanking = JSON.parse(localStorage.getItem('ranking'));
    if (storedRanking) {
      localStorage.setItem('ranking', JSON.stringify([...storedRanking, newRank]));
    } else {
      localStorage.setItem('ranking', JSON.stringify([newRank]));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      Feedback
    </main>
  );
}

export default Feedback;
