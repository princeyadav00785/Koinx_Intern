import React, { useEffect, useState } from 'react';

function CoinData() {
  const [cryptoData, setCryptoData] = useState(null);
  const cryptoSymbol = 'bitcoin'; 

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${cryptoSymbol}`);
        const data = await response.json();
        setCryptoData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchCryptoData();
  }, [cryptoSymbol]);

  return (
    <div className=" bg-white mt-10 max-w-5xl w-[100%] h-[600px] p-12">
     <div>
      <h1 className='text-3xl font-extrabolds'>Performance</h1>
      <div className='flex'>
        <div className='mr-4'>
          <h1>Todays's Low</h1>
          <h1>46,930.22</h1>
        </div>
        <div className='w-[500px] h-[10px] bg-gray-600 mt-4'></div>
        <div className='ml-4'>
        <h1>Today's High</h1>
        <h1>49,343.83 </h1>
        </div>
      </div>
      <div className='flex mt-4'>
        <div className='mr-6'>
          <h1>52W Low</h1>
          <h1>16,930.22</h1>
        </div>
        <div className='w-[520px] h-[10px] bg-gray-600 mt-4'></div>
        <div className='ml-4'>
        <h1>52W High</h1>
        <h1>49,743.83 </h1>
        </div>
      </div>
     </div>
     <div>
      <div className='mt-6 flex'>
        <h1  className='text-3xl'>Fundamentals</h1>
        <svg className='mt-2 ml-3' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_773)">
              <path d="M10.04 2.4635C5.43997 2.4635 1.70663 6.19683 1.70663 10.7968C1.70663 15.3968 5.43997 19.1302 10.04 19.1302C14.64 19.1302 18.3733 15.3968 18.3733 10.7968C18.3733 6.19683 14.64 2.4635 10.04 2.4635ZM10.8733 14.9635H9.20663V9.9635H10.8733V14.9635ZM10.8733 8.29683H9.20663V6.63017H10.8733V8.29683Z" fill="#7C7E8C"/>
            </g>
            <defs>
              <clipPath id="clip0_1_773">
                <rect width="20" height="20" fill="white" transform="translate(0.039978 0.796875)"/>
              </clipPath>
            </defs>
          </svg>
      </div>
      <div className='flex'>
        <div className='right flex flex-col w-1/2'>
        <div className='flex justify-between mt-6'>
          <h1>Bitcoin Price</h1>
          <h1>$16,815.46</h1>
        </div>
        <hr/>
        <div className='flex justify-between mt-6'>
          <h1>24h Low / 24h High</h1>
          <h1>$16,815.46/$16,814.12</h1>
        </div>
        <hr/>
        <div className='flex justify-between mt-6'>
          <h1>7dh Low / 7d Hig</h1>
          <h1>$16,815.46/$16,814.12</h1>
        </div>
        <hr/>
        <div className='flex justify-between mt-6'>
          <h1>Trading Volume</h1>
          <h1>$16,815.46</h1>
        </div>
        <hr/>
        <div className='flex justify-between mt-6'>
          <h1>Market Cap Rank</h1>
          <h1>1</h1>
        </div>
        <hr/>
        
        </div>
        <div className='left flex flex-col w-1/3 ml-16 mt-6'>
        <div className='flex justify-between '>
          <h1>Market Cap</h1>
          <h1>$16,815.46</h1>
        </div>
        <div className='flex justify-between mt-6'>
          <h1>Market Cap Dominance</h1>
          <h1>38.34%</h1>
        </div><div className='flex justify-between mt-6'>
          <h1>Volume / Market Cap</h1>
          <h1>0.0718</h1>
        </div><div className='flex justify-between mt-6'>
          <h1>All-Time High</h1>
          <h1>$16,815.46</h1>
        </div><div className='flex justify-between mt-6'>
          <h1>All-Time Low</h1>
          <h1>$16,815.46</h1>
        </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default CoinData;
