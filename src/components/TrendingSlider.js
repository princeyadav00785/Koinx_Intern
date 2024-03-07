import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TrendingSlider = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const data = await response.json();
        // console.log(data)
        const top25TrendingCoins = data.coins.slice(0, 10);
        // console.log(top25TrendingCoins)

        setTrendingCoins(top25TrendingCoins);
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchTrendingCoins();
  }, []);



  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Trending Coins</h2>
      <Slider {...settings}>
        {trendingCoins.map((coin) => (
          <div key={coin.item.id} className="flex flex-col items-center p-4 border rounded-md shadow-md ">
           <div className='flex'>
           <img
              src={coin.item.small}
              alt={`${coin.item.name} Logo`}
              className="w-16 h-16 rounded-full mb-2"
            />
            <p className="font-semibold ml-6 mt-6 text-xl">{`${coin.item.name}`}</p>
            <p className="text-green-500 font-semibold mt-6 ml-4">{parseFloat(coin.item.data.price_change_percentage_24h.usd).toFixed(2)}%</p>
           </div>
            <p className=" ml-4 text-black font-semibold mb-1 mt-3">Price: {coin.item.data.price}</p>
            <img
              src={coin.item.data.sparkline}
              alt={`${coin.item.name} Graph`}
              className="w-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingSlider;
