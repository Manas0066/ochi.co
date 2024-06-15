import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
      <div className='cardcontainer h-[50vh] w-1/2'>
        <div className='card relative rounded-xl w-full h-full bg-[#004d43] flex items-center justify-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute left-10 bottom-10 px-5 py-1 border-[1px] rounded-full'>&copy; 2023-2024</button>
        </div>
      </div>
      <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
        <div className='card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='absolute left-10 bottom-10 px-5 py-1 border-[1px] rounded-full uppercase'>Rating 5.0 on Clutch</button>
        </div>
        <div className='card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='absolute left-10 bottom-10 px-5 py-1 border-[1px] rounded-full'>BUISNESS BOOTCAMP ALUMINI</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
