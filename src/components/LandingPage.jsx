import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {


  return (
    <div data-scroll data-scroll-speed='-.3' className='w-full h-screen bg-zinc-900 pt-1'>
      <div className="text-structure mt-40 px-20">
      {["We Create","Eye-Opening","Presentation"].map((item,index)=>{
        return (<div className="masker">
           <div className='w-fit flex items-center'>

            {index==1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1],duration:1}} className=' mr-[0.6vw] w-[9vw] rounded-xl h-[5.2vw] relative top-[0.5vw] bg-red-700 overflow-hidden'>
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
            </motion.div>)}

            <h1 className='uppercase text-[7.5vw] leading-[6vw] font-["Neue Montreal"] tracking-tighter font-semibold'>
            {item}
            </h1>
           </div>
        </div>
        );
      })}
      
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
        {["For public and private companies","From the pitch to the IPO"].map((item,index)=>(
            <p className='text-md font-light tracking-tight leading-none'>{item}</p>
        ))}

        <div className='start flex items-center gap-5 '>
           <div className='px-5 py-2 border-[2px] bg-zinc-900 font-light text-lg uppercase rounded-full'>start the project</div>
           <div className='w-10 h-10 flex items-center justify-center border-[2px] bg-zinc-900 rounded-full'>
           <span className='rotate-[45deg]'>
           <FaArrowUpLong />
           </span>
           </div>
        </div>
      </div>

     
    </div>
  )
}

export default LandingPage
