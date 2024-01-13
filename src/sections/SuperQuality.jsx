import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className=' text-white font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          Why choose
          <span className='text-coral-red'> Alec </span>
          <span className='text-coral-red'>App </span> for booking
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Find your perfect makeup artist and transform your look for any occasion.
         Our app connects you with talented artists, offering a wide range of styles and prices.
         Say goodbye to uncertainty and hello to confidence in your makeup choices.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
        No more endlessly searching the internet for the perfect artist.  
        Browse a diverse selection of artists, compare prices that fit your budget, 
        and make informed decisions based on ratings and reviews from satisfied clients. 
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
