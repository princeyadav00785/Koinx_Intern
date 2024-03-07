import React, { useEffect, useState } from 'react';

const Trending = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const data = await response.json();

        const top3TrendingCoins = data.coins.slice(0, 3);

        setTrendingCoins(top3TrendingCoins);
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4" >
      <h2 className="text-xl font-semibold mb-4">Trending Coins (24h)</h2>
      <ul>
        {trendingCoins.map((coin) => (
          <li key={coin.item.id} className="flex items-center justify-between border-b py-2">
            <div className="flex items-center">
              <img
                src={coin.item.small} 
                alt={`${coin.item.name} Logo`}
                className="w-8 h-8 mr-2 rounded-full"
              />
              <div>
                <p className="font-semibold mt-4 mb-2">{coin.item.name} ({coin.item.symbol})</p>
                <p className="text-gray-500">Price: {coin.item.data.price}</p>
                <p className="text-green-500 font-semibold">Price Change: {parseFloat(coin.item.data.price_change_percentage_24h.usd).toFixed(2)}%</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trending;
