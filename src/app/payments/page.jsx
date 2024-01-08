import React from 'react'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import OrderTable from '@/components/OrderTable';
import { Search } from 'lucide-react';
import topdown from "../../../public/assets3/topdown.svg"
import Image from "next/image"
import download from "../../../public/assets3/download.svg"

export const sampleOrders = [
    { id: 1, orderId: 'ORD001', orderDate: '2022-01-01', orderAmount: '₹150.00', transactionFees: '₹5.00' },
    { id: 2, orderId: 'ORD002', orderDate: '2022-01-02', orderAmount: '₹120.00', transactionFees: '₹4.00' },
    { id: 3, orderId: 'ORD003', orderDate: '2022-01-03', orderAmount: '₹200.00', transactionFees: '₹8.00' },
    { id: 4, orderId: 'ORD004', orderDate: '2022-01-04', orderAmount: '₹80.00', transactionFees: '₹3.00' },
    { id: 5, orderId: 'ORD005', orderDate: '2022-01-05', orderAmount: '₹250.00', transactionFees: '₹10.00' },
    { id: 6, orderId: 'ORD006', orderDate: '2022-01-06', orderAmount: '₹180.00', transactionFees: '₹7.00' },
    { id: 7, orderId: 'ORD007', orderDate: '2022-01-07', orderAmount: '₹300.00', transactionFees: '₹12.00' },
    { id: 8, orderId: 'ORD008', orderDate: '2022-01-08', orderAmount: '₹100.00', transactionFees: '₹4.00' },
    { id: 9, orderId: 'ORD009', orderDate: '2022-01-09', orderAmount: '₹130.00', transactionFees: '₹5.50' },
    { id: 10, orderId: 'ORD010', orderDate: '2022-01-10', orderAmount: '₹90.00', transactionFees: '₹3.50' },
    { id: 11, orderId: 'ORD011', orderDate: '2022-01-11', orderAmount: '₹110.00', transactionFees: '₹4.50' },
    { id: 12, orderId: 'ORD012', orderDate: '2022-01-12', orderAmount: '₹160.00', transactionFees: '₹6.00' },
    { id: 13, orderId: 'ORD013', orderDate: '2022-01-13', orderAmount: '₹140.00', transactionFees: '₹5.00' },
    { id: 14, orderId: 'ORD014', orderDate: '2022-01-14', orderAmount: '₹200.00', transactionFees: '₹8.50' },
    { id: 15, orderId: 'ORD015', orderDate: '2022-01-15', orderAmount: '₹120.00', transactionFees: '₹4.00' },
    { id: 16, orderId: 'ORD016', orderDate: '2022-01-16', orderAmount: '₹180.00', transactionFees: '₹7.50' },
    { id: 17, orderId: 'ORD017', orderDate: '2022-01-17', orderAmount: '₹250.00', transactionFees: '₹10.00' },
    { id: 18, orderId: 'ORD018', orderDate: '2022-01-18', orderAmount: '₹90.00', transactionFees: '₹3.50' },
    { id: 19, orderId: 'ORD019', orderDate: '2022-01-19', orderAmount: '₹110.00', transactionFees: '₹4.50' },
    { id: 20, orderId: 'ORD020', orderDate: '2022-01-20', orderAmount: '₹140.00', transactionFees: '₹5.50' },
    { id: 21, orderId: 'ORD021', orderDate: '2022-01-21', orderAmount: '₹300.00', transactionFees: '₹12.00' },
    { id: 22, orderId: 'ORD022', orderDate: '2022-01-22', orderAmount: '₹160.00', transactionFees: '₹6.50' },
    { id: 23, orderId: 'ORD023', orderDate: '2022-01-23', orderAmount: '₹200.00', transactionFees: '₹8.00' },
    { id: 24, orderId: 'ORD024', orderDate: '2022-01-24', orderAmount: '₹250.00', transactionFees: '₹10.50' },
    { id: 25, orderId: 'ORD025', orderDate: '2022-01-25', orderAmount: '₹120.00', transactionFees: '₹5.00' },
    { id: 26, orderId: 'ORD026', orderDate: '2022-01-26', orderAmount: '₹90.00', transactionFees: '₹4.00' },
    { id: 27, orderId: 'ORD027', orderDate: '2022-01-27', orderAmount: '₹140.00', transactionFees: '₹6.00' },
    { id: 28, orderId: 'ORD028', orderDate: '2022-01-28', orderAmount: '₹180.00', transactionFees: '₹7.50' },
    { id: 29, orderId: 'ORD029', orderDate: '2022-01-29', orderAmount: '₹200.00', transactionFees: '₹8.50' },
    { id: 30, orderId: 'ORD030', orderDate: '2022-01-30', orderAmount: '₹150.00', transactionFees: '₹6.50' },
  ];
  

  

const page = () => {
  return (
    <div className='bg-[#fafafa] p-5'>
       <div>
        <div className='flex justify-between items-center'>
            <div className='text-[1.2rem]'>Overview</div>
            <div className='flex gap-1 bg-white rounded-md border-2 px-2 py-1 items-center justify-center cursor-pointer'>
                <div className='text-sm text-[#4d4d4d]'>Last month</div>
                <ChevronDown className='text-[#4d4d4d]'/>
            </div>
        </div>
        <div className='flex flex-start gap-5 mt-4 border-b'>
            <div className='text-[1.2rem] pb-3 border-[#2678b9] border-b-[3px] text-[#2678b9] cursor-pointer'>Razorpay</div>
            <div className='text-[1.2rem] text-[#595959] cursor-pointer'>Cashfree</div>
        </div>
        <div className='mt-5 flex justify-between'>
            <div className='w-[49%] bg-white rounded-md shadow-md flex flex-col justify-center p-4 gap-3'>
                <div className='text-sm text-[#4d4d4d]'>
                    Total orders
                </div>
                <div className='text-2xl text-black font-semibold'>
                    231
                </div>
            </div>
            <div className='w-[49%] bg-white rounded-md shadow-md flex flex-col justify-center p-4 gap-3'>
                <div className='text-sm text-[#4d4d4d]'>
                    Amount received
                </div>
                <div className='text-2xl text-black font-semibold'>
                    ₹23,92,312.19
                </div>
            </div>
        </div>
        <div className='mt-8  text-black '>
            Transactions | This Month
        </div>
        <div className='p-3 bg-white rounded-md shadow-md mt-3 mb-3 '>
            <div className='flex justify-between'>
                <div className='px-4 py-[9px] space-x-2 flex items-center rounded-md bg-white border my-2'>
                    <Search className='text-[#808080]' width={16} height={16}/>
                    <input 
                        className='grow outline-none bg-transparent leading-[22px] placeholder:text-[#808080]' placeholder='Search by order ID...'
                    />
                </div>
                <div className='flex gap-2 justify-center items-center'>
                    <div className='flex gap-1 bg-white border px-2 py-[9px] rounded-md cursor-pointer'>
                        <div className='text-[#4d4d4d]'>Sort</div>
                        <Image src={topdown} alt='image'/>
                    </div>
                    <div className=' bg-white border px-2 py-[9px] rounded-md cursor-pointer'>
                        <Image src={download} alt='image'/>
                    </div>
                </div>
            </div>
            <div className=''>
                <OrderTable orders={sampleOrders}/>
                <div className='mt-3 flex justify-center items-center gap-1'>
                    <button className='bg-white border px-3 py-1 rounded-md flex gap-2 justify-center items-center cursor-pointer'>
                        <ChevronLeft className='text-[#4d4d4d]'/>
                        <div className='text-[#4d4d4d]'>Previous</div>
                    </button>
                    <div className='text-[#4d4d4d] px-3 py-1 rounded-md cursor-pointer'>
                        1
                    </div>
                    <div className='text-[#4d4d4d] px-3 py-1 rounded-md cursor-pointer'>
                        ...
                    </div>
                    <div className='px-3 py-1 rounded-md cursor-pointer bg-[#126eb4] text-white'>
                        10
                    </div>
                    <div className='text-[#4d4d4d] px-3 py-1 rounded-md cursor-pointer'>
                        11
                    </div>
                    <div className='text-[#4d4d4d] px-3 py-1 rounded-md cursor-pointer'>
                        12
                    </div>
                    <div className='text-[#4d4d4d] px-3 py-1 rounded-md cursor-pointer'>
                        13
                    </div>
                    <div className='text-[#4d4d4d] px-3 py-1 rounded-md cursor-pointer'>
                        14
                    </div>
                    <div className='text-[#4d4d4d] px-3 py-1 rounded-md cursor-pointer'>
                        15
                    </div>
                    <div className='text-[#4d4d4d] px-3 py-1 rounded-md cursor-pointer'>
                        16
                    </div>
                    <div className='text-[#4d4d4d] px-3 py-1 rounded-md cursor-pointer'>
                        17
                    </div>
                    <div className='text-[#4d4d4d] px-3 py-1 rounded-md cursor-pointer'>
                        18
                    </div>
                    <button className='bg-white border px-3 py-1 rounded-md flex gap-2 justify-center items-center cursor-pointer'>
                        <ChevronRight className='text-[#4d4d4d]'/>
                        <div className='text-[#4d4d4d]'>Next</div>
                    </button>
                </div>
            </div>
        </div> 
       </div>
    </div>
  )
}

export default page;

