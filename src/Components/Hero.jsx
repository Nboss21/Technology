import React from 'react'
import GetStarted from './Getstarted';

const Hero = () => (
  <section className=" flex md:flex-row flex-col justify-between sm:py-16 py-6   ">
    <div className="flex-1 flex-col xl:px-0 sm:px-16 px-6 flex justify-center items-start ">
      <div className="flex flex-row items-center py-[6px] px-4 bg-[#2F2E37] rounded-[10px] mb-1 ">
        <img
          src="/images/percent.png"
          alt="discount"
          className="w-[32px] h-[32px]"
        />
        <p className="font-poppins font-normal text-[#BCBCBE] text-[18px] leading-[30.8px]">
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white "> 1 Month</span> Account
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] ">
          The Next <br className="sm:block hidden" />
          <span className="text-[#33BBCF]">Generation</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className="flex-1 font-semibold ss:text-[68px] w-full text-[52px] text-white ss:leading-[100px] leading-[75px] ">
        Payment Method.
      </h1>
      <p className="font-poppins font-normal text-white text-[18px] leading-[30.8px] max-w-[470px] mt-4">
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
    <div className=" flex-1 flex justify-center items-center md:my-0 my-10 relative">
      <img
        src="/images/hand.png"
        alt=""
        className="w-[100%] h-[100$] relative z-[5] "
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
    <div className="ss:hidden flex justify-center items-center">
      <GetStarted />
    </div>
  </section>
);


export default Hero