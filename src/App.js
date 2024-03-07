import './App.css';
import AboutBitcoin from './pages/AboutBitcoin';
import CoinData from './components/Table';
import BitcoinGraph from './components/TradingViewWidget'
import TrendingSlider from './components/TrendingSlider';
import YouMayLike from './components/YouMayLike';
import Navbar from './components/Navbar';
import Sentiment from './components/Sentiment';
import Tokenomics from './components/Tokenomics';
import Team from './components/Team';

function App() {
  return (
    <div className="mt-8">
      <Navbar/>
      <div className='p-8 bg-gray-100' >
      <BitcoinGraph/>
     <div className='max-w-6xl'>
     <CoinData />
     <AboutBitcoin/>
     <Sentiment/>
     <Tokenomics/>
     <Team/>
     </div>
     <YouMayLike/>
     <TrendingSlider/>
     </div>
    </div>
  );
}

export default App;
