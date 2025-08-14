import Image from 'next/image'
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({name,image,id}:{name:string, image:string, id:string}) => {
  return (
    <div className='w-full sm:w-[400px] md:w-[500px] relative h-[300px] sm:h-[350px] md:h-[400px] 
    bg-white/10 backdrop-blur-lg shadow-md shadow-slate-800 rounded-xl border border-white/20'>
      
      {/* Card Content */}
      <div className='text-white font-bold pt-[30px] sm:pt-[40px] md:pt-[50px] px-4 sm:pl-[30px]'>
        <h1 className='text-xl sm:text-2xl md:text-3xl'>{name}</h1>
        <Link href={`/course/${id}`}>
          <button className='flex items-center gap-[10px] text-sm sm:text-base'>
            Learn more <FaArrowRightLong />
          </button>
        </Link>
      </div>

      {/* Card Image */}
      <div>
        <Image 
          src={`/${image}`} 
          alt='' 
          width={500} 
          height={0} 
          className='absolute bottom-0 w-[70%] sm:w-[80%] md:w-[500px] h-auto mx-auto left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto'
        />
      </div>
    </div>
  )
}

export default Card
