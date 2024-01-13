import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full  rounded-xl'>
      <img  src={imgURL} alt={name} className='w-[282px] h-[282px] rounded-xl' />
      <div className=' mt-4 flex justify-start gap-2.5 rounded-xl'>
        <img className=" rounded-xl mt-3" src={star} alt='rating icon' width={14} height={14} />

        <h3 className='mt-2 text-xl justify-center leading-normal font-semibold font-palanquin text-white'>
        {name}
      </h3>
        
      </div>
      
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
