import React, { useState } from 'react'

function Navbar() {
    const [toggle, setToggle] = useState(false)
  return (
    <nav className=" w-full flex py-6 justify-between items-center navbar">
      <img src="/images/hoobank.svg" alt="" className="w-[124px] h-[32px]" />

      <div className="sm:flex hidden flex-1 justify-end    ">
        <a
          href="#"
          className="text-1xl text-white font-poppins  cursor-pointer text-[16px] mr-10"
        >
          Home
        </a>
        <a
          href="#"
          className="text-1xl text-white font-poppins  cursor-pointer text-[16px] mr-10"
        >
          About
        </a>
        <a
          href="#"
          className="text-1xl text-white font-poppins  cursor-pointer text-[16px] mr-10"
        >
          Features
        </a>
        <a
          href="#"
          className="text-1xl text-white font-poppins cursor-pointer text-[16px] mr-0"
        >
          Solution
        </a>
      </div>

      <div className="flex sm:hidden flex-1 justify-end items-center">
        <img
          src={toggle ? "/images/close.svg" : "/images/ham.svg"}
          className="w-[28px] h-[28px] object-contain "
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <div className="flex flex-col justify-between flex-1    ">
            <a
              href="#"
              className="text-1xl text-white font-poppins  cursor-pointer text-[16px] mr-10"
            >
              Home
            </a>
            <a
              href="#"
              className="text-1xl text-white font-poppins  cursor-pointer text-[16px] mr-10"
            >
              About
            </a>
            <a
              href="#"
              className="text-1xl text-white font-poppins  cursor-pointer text-[16px] mr-10"
            >
              Features
            </a>
            <a
              href="#"
              className="text-1xl text-white font-poppins cursor-pointer text-[16px] mr-0"
            >
              Solution
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar