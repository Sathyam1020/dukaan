import React from 'react';

const OrderTable = ({ orders }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className='bg-[#f2f2f2] text-[#4d4d4d] text-sm'>
            <th className="py-2 px-4 border-b font-[11px]">Order ID</th>
            <th className="py-2 px-4 border-b font-[11px]">
                
                Order Date
            </th>
            <th className="py-2 px-4 border-b text-right font-[11px]">Order Amount</th>
            <th className="py-2 px-4 border-b text-right font-[11px]">Transaction Fees</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className=''>
              <td className="py-2 px-4 border-b text-center text-[#2678b9] font-light text-sm">#{order.orderId}</td>
              <td className="py-2 px-4 border-b text-center text-[#2b292f] font-light text-sm">{order.orderDate}</td>
              <td className="py-2 px-4 border-b text-right text-[#2b292f] font-light text-sm">{order.orderAmount}</td>
              <td className="py-2 px-4 border-b text-right text-[#2b292f] font-light text-sm">{order.transactionFees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
