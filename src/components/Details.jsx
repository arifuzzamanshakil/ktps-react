import React from 'react';
import { check, medicine1, medicine2, milk } from '../assets/img';
import data from "../data";
import Carousel from './layouts/Carousel';


const Details = () => {

  return (
    <div className="h-full bg-cover bg-no-repeat bg-center pt-14 md:pt-24 w-[335px] sm:w-[500px] md:w-full mx-auto">


      <div>

        <h2 className='md:text-5xl text-[28px] font-Rajdhani font-semibold tracking-[4.8px] drop-shadow-5xl text-white m-auto text-center pt-24'>{data.DetailsSec.pageTitle.en}</h2>

        <div className='justify-between flex flex-wrap  gap-5 mx-auto items-start py-0 md:py-10 lg:w-[1020px] xl:w-[1150px] md:w-[770px]  '>

          <div className="card lg:w-[465px] md:w-[370px] gap-5 flex flex-col">
            <div className="card_head flex flex-col md:flex-row items-center gap-0">
              <img src={medicine1} alt="" className='w-28 h-28 md:-ml-8 -mb-3 md:mb-0' />
              <h3 className=' font-Proxima md:text-2xl text-xl font-normal lg:font-bold text-[#FFC1E5] drop-shadow-6xl text-center' >{data.DetailsSec.header1.en.title}</h3>
            </div>
            <p className=' font-Inter font-normal md:text-lg text-base md:text-left text-center  text-white drop-shadow-7xl leading-7 md:leading-10'>{data.DetailsSec.header1.en.description}</p>
          </div>



          <div className="card lg:w-[465px] md:w-[370px] gap-5 flex flex-col">
            <div className="card_head flex flex-col md:flex-row items-center gap-0">
              <img src={medicine2} alt="" className='w-28 h-28 md:-ml-8 -mb-3 md:mb-0' />
              <h3 className=' font-Proxima md:text-2xl text-xl font-normal lg:font-bold text-[#FFC1E5] drop-shadow-6xl text-center' >{data.DetailsSec.header2.en.title}</h3>
            </div>
            <p className=' font-Inter font-normal md:text-lg text-base md:text-left text-center  text-white drop-shadow-7xl leading-7 md:leading-10'>{data.DetailsSec.header2.en.description}</p>
          </div>

          <div className="card lg:w-[465px] md:w-[370px] gap-5 flex flex-col">
            <div className="card_head flex flex-col md:flex-row items-center gap-0">
              <img src={check} alt="" className='w-28 h-28 md:-ml-8 -mb-3 md:mb-0' />
              <h3 className=' font-Proxima md:text-2xl text-xl font-normal lg:font-bold text-[#FFC1E5] drop-shadow-6xl text-center' >{data.DetailsSec.header3.en.title}</h3>
            </div>
            <p className=' font-Inter font-normal md:text-lg text-base md:text-left text-center  text-white drop-shadow-7xl leading-7 md:leading-10'>{data.DetailsSec.header3.en.description}</p>
          </div>

          <div className="card lg:w-[465px] md:w-[370px] gap-5 flex flex-col">
            <div className="card_head flex flex-col md:flex-row items-center gap-0">
              <img src={milk} alt="" className='w-28 h-28 md:-ml-[25px] -mb-3 md:mb-0' />
              <h3 className=' font-Proxima md:text-2xl text-xl font-normal lg:font-bold text-[#FFC1E5] drop-shadow-6xl text-left' >{data.DetailsSec.header4.en.title}</h3>
            </div>
            <p className='font-Inter font-normal md:text-lg text-base md:text-left text-center  text-white drop-shadow-7xl leading-7 md:leading-10'>{data.DetailsSec.header4.en.description}</p>
          </div>
          <div className="w-full mx-auto hidden lg:block">
            <div className="heading">
              <h2 className='text-5xl font-Rajdhani font-semibold tracking-[4.8px] drop-shadow-5xl text-white m-auto text-center pt-24 mb-10'>{data.DetailsSec.secTitle.en}</h2>
            </div>
            <Carousel />
          </div>
        </div>
      </div>


    </div>
  );
};

export default Details;