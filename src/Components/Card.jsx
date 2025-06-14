import React from 'react'
import Button from './Button';



const Card = () => (
  <section className="flex flex-col  md:flex-row sm:py-16 py-6">
    <div className="flex-col flex justify-center items-start ">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className="font-poppins font-normal text-gray-500 text-[18px] leading-[30.8px] w-[470px] mt-5">
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button styles="mt-10" />
    </div>
    <div
      className="flex flex-1 justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative 
    "
    >
<img src="/images/scan.png" alt="scancard" className='w[100%] h-[100%]' />
    </div>
  </section>
);


export default Card