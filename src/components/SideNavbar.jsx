'use client'

import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import ProfilePic from "../../public/assets3/profile.png";
import wallet from "../../public/assets3/wallet.svg"
import { ChevronDown } from 'lucide-react';
import { sidebarLinks } from '@/constants';
import {usePathname} from "next/navigation"

const SideNavbar = () => {

    const pathname = usePathname();

  return (
    <div className='fixed h-screen w-[18%] overflow-auto bg-[#1e2640] p-3 max-md:hidden flex flex-col'>
        {/* Profile picture */}
        <div className='flex justify-between min-w-[180px]'>
            <div className='flex gap-2 justify-center items-center'>
                <div className='rounded-md overflow-hidden max-h-[3rem] max-w-[3rem]'>
                    <Image src={ProfilePic} alt="Profile image" className='text-white' height={50} width={50}/>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-white'>Nishyan</div>
                    <div className='text-sm font-light underline text-[#b0b3bc] cursor-pointer'>Visit store</div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <ChevronDown className='text-white font-semibold text-xl cursor-pointer'/>
            </div>
        </div>

        {/* Navbar  */}
        <div className='flex justify-between flex-col gap-2 h-full'>
            <div className='mt-5 flex flex-col gap-1'>
                {
                    sidebarLinks.map((link) => {
                        return (
                            <Link key={link.label} href={link.route}
                            className={`flex gap-2 justify-start group items-center rounded-md cursor-pointer transition-all duration-200 py-2 px-2 ${
                                pathname === link.route ? 'bg-[#363c53] text-white' : 'hover:bg-[#363c53] group-hover:text-white'
                            }`}
                            >
                            <div className='text-[#d3d4d9]'>
                                <Image src={link.imgURL} alt='image' width={16} height={16} />
                            </div>
                            <div className='text-[#d3d4d9] text-[14px] group-hover:text-white transition-all duration-200'>{link.label}</div>
                        </Link>
                        )
                    })
                }
            </div>
            <div className='text-white bg-[#363c53] rounded-md p-1 flex justify-center items-center gap-3 mb-1'>
                <div className='bg-[#4a5065] rounded-sm p-1'>
                    <Image src={wallet} alt='wallet'/>
                </div>
                <div className='flex justify-start flex-col'>
                    <div className='text-sm text-[#c0c5d7]'>Available credits</div>
                    <div>222.10</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideNavbar; 