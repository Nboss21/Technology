import React from 'react'

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 bg-[#5CE1E6] cursor-pointer rounded-2xl font-poppins font-medium text-[18px] text-black outline-none ${styles}`}
  >
    Get Started
  </button>
);


export default Button