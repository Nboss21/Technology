import React from 'react'
import { features } from "../constants/index.js";
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row rounded-[20px] p-6 ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } hover:bg-[#b2b2b41a]`}
  >
    <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center">
      <img
        src={`${icon}`}
        alt="icon"
        className="w-[100%] h-[100%] object-contain"
      />
    </div>
    <div className="flex flex-col ml-3 flex-1">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-semibold text-gray-400 text-[16px] leading-[24px] mb-0">
        {content}
      </p>
    </div>
  </div>
);
const Business = () => (
  <section className="flex md:flex-row flex-col sm:py-16 py-6">
    <div className="flex justify-center items-start flex-col">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        You do the business,
        <br className="sm:block hidden" /> we’ll handle the money.
      </h2>
      <p className="font-poppins font-normal text-[#FFFFFFB2] text-[18px] leading-[30.8px] max-w-[470px] mt-5">
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className="flex-col flex-1 flex justify-center items-start md:ml-10 ml-0 md:mt-0 mt-10 relative">
{ features.map((feat,index)=>(
  <FeatureCard key={feat.id} {...feat}
  index={index}
  />
))
   
}


    </div>
  </section>
);


export default Business