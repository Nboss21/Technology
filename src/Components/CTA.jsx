import React from 'react'
import Button from './Button';

const CTAsection = () => (
  <section className="flex flex-col bg-[rgba(66,71,91,0.1)] sm:my-16 my-6 sm:flex-row rounded-[20px] justify-center items-center sm:px-16 px-6 sm:py-12 py-4">
    <div className="flex-1 flex flex-col ">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        Let’s try our service now!
      </h2>
      <p className="font-poppins font-normal text-gray-400 text-[18px] leading-[30.8px] max-w-[470px] mt-5">
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div className=" flex justify-center items-center sm:m1-10 m1-0 sm:mt-0 mt-10">
      <Button />
    </div>
  </section>
);


export default CTAsection