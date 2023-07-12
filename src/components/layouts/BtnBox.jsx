import React from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import data from "../../data";

function BtnBox() {

 var settings ={
  scroll:{  }
 }

 return (
  <div>
   {
    data.map((getData, index) => (
     <div className="flex justify-between">

      <div className="w-[518px] h-[285px] border border-[#E5AEEE] rounded-[14px] py-10 px-[75px] bg-[#B158BF1A]">
       <h2 className='text-5xl font-Rajdhani font-semibold tracking-[4.8px] drop-shadow-5xl text-white text-center'>{getData.checklist.boxTitle.en}</h2>

       <div className="flex flex-wrap justify-center px-4 pt-5 gap-6 ">
        <a href="#testStrips" className="border border-[#97E4FC] rounded-lg bg-[#0C787CCC] py-[14px] px-6 text-xl font-semibold font-Inter text-white "> {getData.checklist.boxBtn.en} </a>

        <a href="#nalox" className="border border-[#97E4FC] rounded-lg bg-[#0C787CCC] py-[14px] px-6 text-xl font-semibold font-Inter text-white "> {getData.checklist.boxBtn2.en} </a>

        <a href="#nonuser" className="border border-[#97E4FC] rounded-lg bg-[#0C787CCC] py-[14px] px-6 text-xl font-semibold font-Inter text-white "> {getData.checklist.boxBtn3.en} </a>
       </div>

      </div>

      <div className="w-[518px] h-[285px] border border-[#E5AEEE] rounded-[14px] py-10 px-10 bg-[#B158BF1A] ">
       <h2 className='text-5xl font-Rajdhani font-semibold tracking-[4.8px] drop-shadow-5xl text-white m-auto text-center'>{getData.checklist.boxTitle2.en}</h2>
       <p className='text-lg text-center text-white font-Inter font-normal drop-shadow-9xl pt-5'> {getData.checklist.boxPara.en} </p>

       <div className="flex flex-wrap justify-center px-4 pt-8 gap-7 ">
        <a href="#" className="border border-[#97E4FC] rounded-lg bg-[#0C787CCC] py-[10px] px-6 text-base font-semibold font-Inter text-white flex items-center gap-2"> <FaFacebookF /> {getData.checklist.boxBtn4.en} </a>

        <a href="#" className="border border-[#97E4FC] rounded-lg bg-[#0C787CCC] py-[10px] px-6 text-base font-semibold font-Inter text-white flex items-center gap-2"> <FaInstagram /> {getData.checklist.boxBtn4.en} </a>

       </div>


      </div>
     </div>
    ))
   }
  </div>
 );
};

export default BtnBox;