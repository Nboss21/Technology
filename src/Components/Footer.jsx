import React from 'react'
import {footerLinks} from '../constants'
import { socialMedia } from '../constants';
const Footer = () => (
  <section className="flex justify-center items-center sm:py-16 py-6 flex-col">
    <div className="flex jsutify-center items-start md:flex-row flex-col mb-8 w-full">
      <div className="flex flex-1 flex-col justify-start mr-10">
        <img
          src="/images/hoobank.svg"
          alt=""
          className="w-[266px] h-[72px] object-contain"
        />
        <p className="font-poppins font-normal text-gray-400 text-[18px] leading-[30.8px] mt-4 max-w-[310px]">
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((links,index) => (
          <div
            key={index}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white mb-3">
              {links.title}
            </h4>
            <ul className="list-none ">
              {links.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-gray-400 hover:text-[#00f6ff] cursor-pointer ${
                    index == links.links.length - 1 ? "mb-0" : "mb-4"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between item-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright 2025 HooBank. All Rights Reserved.
      </p>
      <div className=" flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] cursor-pointer object-contain ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);


export default Footer