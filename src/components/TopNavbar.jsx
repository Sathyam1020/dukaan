import React from 'react'
import questionMark from "../../public/assets2/asset15.svg"
import dropDown from "../../public/assets2/down.svg"
import chat from "../../public/assets2/chat.svg"
import Image from "next/image"
import { Search } from 'lucide-react';

const TopNavbar = () => {
  return (
    <div className='fixed top-0 bg-[#ffffff] border-b shadow-sm w-[82%]'>
        <div className='flex items-center py-3 px-5'>
            <div className='flex gap-2 w-1/3'>
                <div className=' text-xl '>Payments</div>
                <div className='flex gap-1 items-center'>
                    <Image src={questionMark} alt='image'/>
                    <div className='font-light text-xs'>
                        How it works
                    </div>
                </div>
            </div>
            <div className='w-1/3'>
                <div className='px-4 py-[9px] bg-[#F2F2F2] space-x-2 flex grow items-center rounded-md'>
                    <Search className='text-[#808080]' width={16} height={16}/>
                    <input 
                        className='grow outline-none bg-transparent leading-[22px] placeholder:text-[#808080]' placeholder='Search features, tutorials, etc.'
                    />
                </div>
            </div>
            <div className='flex w-1/3 justify-end items-center gap-2'>
                <div className='rounded-full bg-[#e6e6e6] overflow-auto p-2 cursor-pointer'>
                    <Image src={chat} alt='chat'/>
                </div>
                <div className='rounded-full bg-[#e6e6e6] overflow-auto cursor-pointer'>
                    <Image src={dropDown} alt='dropdown'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopNavbar;