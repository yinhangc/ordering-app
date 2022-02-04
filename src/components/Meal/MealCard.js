import MealForm from './MealForm';

const MealCard = (props) => {
  const { id, name, price, description } = props.meal;
  return (
    <li className="rounded-lg border-2 p-4 w-full">
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <h3 className="mt-2">${price}</h3>
      </div>
      <div>
        <MealForm id={id} meal={props.meal} />
      </div>
    </li>
  );
};

export default MealCard;
