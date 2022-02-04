import cafeImg from '../../assets/cafe.jpg';
import HeaderButton from './HeaderButton';
import MealIntro from '../Meal/MealIntro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between w-full py-4 px-10 z-20 fixed bg-gray-600 text-white">
        <h1 className="font-serif tracking-wide">
          <FontAwesomeIcon icon={faMugHot} className="mb-0.5 mr-2" />
          <span>Emi Cafe</span>
        </h1>
        <HeaderButton />
      </header>
      <div className="relative h-[26rem] w-screen mb-32">
        <img
          src={cafeImg}
          alt="Cafe"
          className="object-cover absolute h-full w-full"
        />
        <MealIntro />
      </div>
    </>
  );
};

export default Header;
