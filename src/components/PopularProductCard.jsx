import { star } from '../assets/icons';

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="flex justify-start mt-8 gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl leading-normal font-montserrat text-slate-gray">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 text-2xl font-semibold leading-normal font-palanquin">
        {name}
      </h3>
      <p className="mt-2 text-2xl font-semibold leading-normal font-montserrat text-coral-red">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
