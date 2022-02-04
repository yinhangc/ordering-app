import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const MealIntro = () => {
  return (
    <div className="relative z-10 top-[70%] grid auto-rows-min gap-4 py-6 px-8 m-auto max-w-xl w-[85%] h-[max-content] rounded-xl text-center tracking-wider bg-gray-600 text-white">
      <div>
        <p className="text-xl sm:text-3xl font-bold">歡迎光臨 Emi Cafe！</p>
        <hr className="w-60 h-[1px] bg-white m-auto mt-2 mb-[0.5px]" />
        <hr className="w-60 h-[1px] bg-white m-auto mt-1.5" />
      </div>
      <p>
        本店主打最地道的意大利咖啡和Gelato，店內所用的咖啡豆全部來自100%意大利北部品牌Griso，確保每一位客人都能品嚐傳統正宗意式咖啡。
      </p>
      <p>
        好好享受你的咖啡時光
        <FontAwesomeIcon icon={faCoffee} className="pt-0.5" />～
      </p>
    </div>
  );
};

export default MealIntro;
