
import { stats } from '../constants/index.js'

const Stats = () => (
  <section className="flex justify-center items-center flex-row flex-wrap sm:mb-20 mb-5">
    {stats.map((stat) => (
      <div
        key={stat.id}
        className=" flex-1 flex justify-center items-center flex-row m-3"
      >
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white ">
          {stat.value}
        </h4>
        |
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-[#33BBCF] uppercase ml-3 ">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);


export default Stats