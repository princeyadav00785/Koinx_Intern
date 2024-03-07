
import React, { useEffect, useRef, memo } from 'react';
import { Card } from './Card';

function BitcoinGraph() {
  const container = useRef();
  const isMounted = useRef(true);

  useEffect(
    () => {
      if (isMounted.current) {
       console.log("Effect is running - Component Mounting");
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "BITSTAMP:BTCUSD|7D",
              "BITSTAMP:BTCUSD|7D"
            ]

          ],
          "chartOnly": false,
          "width" : 1200,
          "height": 800,
          "locale": "en",
          "colorTheme": "light",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "left",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|60",
            "1w|60",
            "1m|30",
            "3m|60",
            "6m|120",
            "12m|1D",
            "all|1M"
          ],
          "lineColor": "rgba(103, 58, 183, 1)"
        }`;
      container.current.appendChild(script);
      }
      return () => {
        if (isMounted.current) {
          console.log("Effect Cleanup - Component Unmounting");
          isMounted.current = false;
        }
      };
    },
    []
  );
  console.log("Render - Component Rendering");

  return (
    <div className='flex'>
    <div className="tradingview-widget-container h-full" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
        </a>
      </div>
    </div>
    <Card />
    </div>
  );
}

export default memo(BitcoinGraph);
