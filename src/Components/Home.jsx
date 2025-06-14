import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import Stats from './Stats';
import Business from './Business';
import Billing from './Billing';
import Card from './Card';
import Comment from './comment';
import Collab from './collab';
import CTAsection from './CTAsection';
import Footer from './Footer';

function Home() {
  return (
    <div className="bg-[#00040F]  overflow-hidden w-full ">
      <div className="sm:px-16 px-6 flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>
      <div className="bg-[#00040F] flex justify-center items-start ">
        <div className="xl:max-w-[1280px] w-full">
          <Hero />
        </div>
      </div>
      <div className="bg-[#00040F] sm:px-16 px-6 flex justify-center items-start ">
        <div className="xl:max-w-[1280px] w-full">
          <Stats />
          <Business />
          <Billing />
          <Card />
          <Comment />
          <Collab />
          <CTAsection/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Home