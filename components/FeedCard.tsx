import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiMessageRounded, BiUpload } from 'react-icons/bi'
import { FaRetweet } from 'react-icons/fa'


const FeedCard:React.FC = () => {
  return (
    <div className=' border border-r-0 border-l-0 border-b-0 border-gray-600 p-4 hover:bg-slate-900  '>
    <div className=' grid grid-cols-8 '>
        <div className=' col-span-1'>
            <Image className=' rounded-full ' src={"https://avatars.githubusercontent.com/u/152617144?v=4"} width={50} height={50} alt='' />
        </div>

        <div className='  col-span-7'>
            <h5>Shubham Singh</h5>
            <p> Do you feel the code quality decrease as the  project  size increase?
                just refactored a lot of bad code #codinglife </p>
                
                <div className=' flex justify-between items-center mt-3 w-[85%] p-2 text-xl'>
                <div>
                    <BiMessageRounded/>
                </div>
                <div>
                    <FaRetweet/>
                </div>
                <div>
                    <AiOutlineHeart/>
                </div>
                <div>
                    <BiUpload/>
                </div>
                </div>
        </div>
    </div>
    </div>
  )
}

export default FeedCard