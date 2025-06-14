import React from 'react'

const GetStarted = () => (
  <div className="w-[150px] h-[150px] rounded-full bg-[#33BBCF] p-[2px] cursor-pointer">
    <div className="flex-col w-[100%] h-[100%] bg-black  flex justify-center items-center rounded-full ">
      <div className="flex justify-center items-start flex-row">
        <p className="font-poppins font-medium text-[18px] mr-2 leading-[23px]">
          <span className="text-[#33BBCF]">Get</span>
        </p>
        <img
          src="/images/Arrow - Up.png"
          alt="Arrow"
          className="w-[23px] h-[23px] object-contain"
        />
        
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-[#33BBCF]">Started</span>
      </p>
    </div>
  </div>
);


export default GetStarted;