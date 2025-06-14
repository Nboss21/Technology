import React from 'react'
import { clients } from '../constants'

const Collab = () => (
  <section className="flex justify-center items-center my-4">
    <div className="flex justify-center items-center flex-wrap w-full ">
      {clients.map((client,index) => (
        <div
          key={index}
          className="flex-1 flex justify-center items-center sm:min-w[192px] min-w-[120px]"
        >
          <img
            src={client.logo}
            alt="client"
            className="  sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Collab