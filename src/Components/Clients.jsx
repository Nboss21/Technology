import React from 'react'
import { feedback } from "../constants/index.js";
import Featurecard from './Featurecard';
const Clients = () => (
  <section className="flex flex-col  sm:py-16 py-6 relative justify-center items-center">
    
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        What people are <br className="sm:block hidden" />
        saying about us
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className="font-poppins font-normal text-gray-400 text-[18px] leading-[30.8px] text-left max-w-[450px]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>
    <div className='flex flex-wrap  sm:justify-start justify-center flex-row w-full relative z-[1]'>
{ feedback.map((feed,index)=>(
    <Featurecard key ={index} {...feed}/>
))

}
    </div>
  </section>
);


export default Clients;