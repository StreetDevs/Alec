import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
        This app empowers makeup artists to showcase their talents to a wide audience 
        of clients from different locations. Say goodbye to the chaos of managing appointments across texts, WhatsApp, and other platforms. Our app also prevents appointment clashes. Once a client books you for a specific time,
         no other client can book at the same time, ensuring a seamless schedule.
        </p>
        <p className='mt-6 info-text'>
        So, are you a makeup artist? It's simple! It literally takes 5 minutes to create
         a profile and become a part of our diverse community of makeup artists. 
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Join now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
