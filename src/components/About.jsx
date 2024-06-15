// import React from 'react'

// function About() {
//   return (
//     <div className='w-full p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-[#000]'>
//        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4vw]'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
//     <div className='font-["Neue_Montreal"] w-full border-t-[1px] flex border-zinc-400 mt-10 py-5'>
//         <div className='text-[1.3vw]'>What you can expect:</div>
//     </div>
//     </div>
//   )
// }

// export default About

import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-[#000]'>
       <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4vw]'>
         Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
       </h1>
       <div className='font-["Neue_Montreal"] w-full border-t-[1px] flex border-[#77873b] mt-10 py-5'>
         <div className='text-[1.3vw]'>What you can expect:</div>
       </div>

       <div className='font-["Neue_Montreal"] flex gap-5 border-t-[1px] pt-10 mt-20 border-[#77873b]'>
         <div className='w-1/2'>
            <h1 className='text-7xl'>Our approach :</h1>
            <button className='flex gap-10 items-center uppercase px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More
            <div className='w-5 h-5 bg-zinc-100 rounded-full '></div>
            </button>
         </div>
         <div className='w-1/2 h-[75vh] bg-black rounded-2xl overflow-hidden'>
          <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
         </div>
       </div>
    </div>
  )
}

export default About
