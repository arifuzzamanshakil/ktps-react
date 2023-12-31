import React from 'react';
import data from '../../data';
import { clock, ensure, insert } from '../../assets/img';

const AccordionsecBox = () => {
 return (
  <div>
     <div className='pt-5'>
      <p className='text-lg text-white font-Inter font-normal drop-shadow-8xl'>{data.unpack.naloxPara1.en}</p>

      <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-8 xl:gap-16 pb-6 -mt-2">

       <div className=''>
        <img src={ensure} alt="" className='mx-auto' />
        <p className='text-lg -mt-8 text-white text-center font-Inter font-normal drop-shadow-8xl'>{data.unpack.naloxPara2.en}</p>
       </div>
       <div>
        <img src={insert} alt="" className='mx-auto' />
        <p className='text-lg -mt-8 text-white text-center font-Inter font-normal drop-shadow-8xl'>{data.unpack.naloxPara3.en}</p>
       </div>
       <div>
        <img src={clock} alt="" className='mx-auto' />
        <p className='text-lg -mt-8 text-white text-center font-Inter font-normal drop-shadow-8xl'>{data.unpack.naloxPara4.en}</p>
       </div>

      </div>

      <p className='text-lg text-white font-Inter font-normal drop-shadow-8xl'>{data.unpack.naloxPara5.en} <a href="#" className="text-[#97E4FC] underline"> {data.unpack.naloxPara6.en}</a></p>


     </div>
  </div>
 );
};

export default AccordionsecBox;