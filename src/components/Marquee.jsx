import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (

    <div data-scroll data-scroll-section data-scroll-speed='.2' className='w-full py-10 rounded-tl-3xl rounded-tr-3xl  bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap gap-5'>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity ,ease:"linear" , duration:10}} className='text-[15vw] leading-none font-["Founders gotesk"] uppercase font-bold mb-[2vw] pt-25'>We are Ochi</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity ,ease:"linear" , duration:10}} className='text-[15vw] leading-none font-["Founders gotesk"] uppercase font-bold mb-[2vw] pt-25'>We are Ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
