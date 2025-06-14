import React from 'react'

const Billing = () => (
  <section className="flex md:flex-row flex-col-reverse sm:py-16 py-6">
    <div className=" flex flex-1 justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
      <img
        src="/images/paypal.png"
        alt="paypal"
        className="w-[100%] h-[100%] relative z-[5] bg-gray-950 rounded-2xl"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full [gray-300]" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className="flex-1 flex justify-center items-start flex-col">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing.
      </h2>
      <p className="font-poppins font-normal text-gray-400 text-[18px] leading-[30.8px] max-w-[470px] mt-5">
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src="/images/google.svg"
          alt=""
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer "
        />
        <img
          src="/images/app.svg"
          alt=""
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer "
        />
      </div>
    </div>
  </section>
);


export default Billing