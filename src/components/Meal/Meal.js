import { useEffect, useState } from 'react';
import MealCard from './MealCard';
import Loader from '../UI/Loader';

const Meal = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          'https://react-http-b067f-default-rtdb.firebaseio.com/meals.json'
        );
        const data = await res.json();
        setMeals(
          Object.entries(data).map(([id, info]) => {
            return { id, ...info };
          })
        );
        setError(false);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {!loading && !error && (
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] justify-items-center justify-center gap-4 animate-fadeIn">
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </ul>
      )}
      {loading && !error && <Loader>載入中</Loader>}
      {!loading && error && <p>抱歉，暫時未能加載資料。</p>}
    </>
  );
};

export default Meal;
