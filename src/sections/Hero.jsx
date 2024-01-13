import { useState } from "react";

import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import {  bigShoe1, headerLogo } from "../assets/images";
import { arrowRight } from "../assets/icons";

import mainP from '../assets/images/profile.png'

import playI from '../assets/images/play.png'





const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);


  const handleLinkClick = () => {

    window.location.href = "https://www.google.com"
  }

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
          Let's enhance and transform your look
        </p>

        <h1 className='mt-10 font-palanquin text-6xl fonts max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className=' text-white xl:bg-black xl:whitespace-nowrap relative z-10 pr-10'>
            Book makeup artists
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Alec</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover a curated community of talented makeup artists in one convinient place. With just a few taps
          on any smartphone you can explore the extensive portfolio of our trusted artists.
        </p>


        

        <div className='flex justify-center items-start flex-wrap w-full mt-6 gap-10'>

          <img className=" justify-center" src={mainP} alt="logo" width={129}
                      
                      height={29} />


         
          <div className=" mt-4">


              <a href="https://www.google.com" onClick={handleLinkClick}>


                <img src={playI} alt="logo" width={129}
                                      height={29} />

                </a>  

                <p className=" text-slate-100 mt-1">Get it on playstore</p>
                
            
           
            </div>            

                  

          

                      
      
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-cover bg-center px-5'>
        <img
          src={bigShoeImg}
          alt='shoe colletion'
          className='relative rounded-xl'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Hero;
