import MealCard from './MealCard';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Americano',
    description: 'Finest fish and veggies',
    price: 40,
  },
  {
    id: 'm2',
    name: 'Cappuccino',
    description: 'A german specialty!',
    price: 50,
  },
  {
    id: 'm3',
    name: 'Latte',
    description: 'American, raw, meaty',
    price: 50,
  },
  {
    id: 'm4',
    name: 'Mocha',
    description: 'Healthy...and green...',
    price: 50,
  },
];

const Meal = () => {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] justify-items-center justify-center gap-4 animate-fadeIn">
      {DUMMY_MEALS.map((meal) => (
        <MealCard key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meal;
