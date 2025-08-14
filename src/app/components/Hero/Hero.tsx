import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between
    h-auto md:h-[480px] bg-[#270f71] px-6 md:px-[100px] py-10 md:py-0 gap-10'>

      {/* Left Section */}
      <div className='flex flex-col gap-4 w-full md:w-[50%] text-center md:text-left'>
        <button className='bg-white flex justify-center items-center mx-auto md:mx-0 
        w-[150px] h-[30px] rounded-[30px] outline outline-white outline-1 text-[#270f71] text-sm'>
          Featured Course
        </button>

        <h3 className='text-[24px] md:text-[30px] text-white font-bold leading-snug'>
          Welcome to TechVerse Academy
        </h3>

        <button className='bg-yellow-300 outline-none w-[120px] h-[30px] rounded-[5px] font-semibold 
        text-[14px] shadow-md shadow-slate-700 mx-auto md:mx-0'>
          Start learning
        </button>

        <p className='text-white text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0'>
          Donec et scelerisque quam. Aliquam varius et sapien a pharetra. 
          Maecenas auctor, augue finibus rhoncus, orci lorem ultricies eli.
        </p>
      </div>

      {/* Right Section */}
      <div className='relative flex justify-center md:justify-end w-full md:w-[50%]'>
        <Image 
          src={'/Hero/h2.svg'} 
          alt='' 
          width={700} 
          height={500} 
          className='w-[80%] sm:w-[70%] md:w-[500px] lg:w-[700px] h-auto'
        />
        <Image 
          src={'/Hero/H1.svg'} 
          alt='' 
          width={700} 
          height={500} 
          className='absolute top-[80px] md:top-[150px] w-[60%] sm:w-[50%] md:w-[500px] lg:w-[700px] h-auto'
        />
      </div>
    </div>
  )
}

export default Hero
