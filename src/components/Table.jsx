import React from "react";

function Table({ data }) {
  return (
    <div className="table-container">
      {data.map((coin) => (
        <div className="row" key={coin.id}>
          
          
          <div className="left">
            <img src={coin.image} alt={coin.name} />
            <div className="coin-info">
              <span className="name">{coin.name}</span>
              <span className="symbol">{coin.symbol.toUpperCase()}</span>
            </div>
          </div>

          
          <div className="price">
            ${coin.current_price}
          </div>

          
          <div className="volume">
            ${coin.total_volume}
          </div>

         
          <div
            className={
              coin.price_change_percentage_24h > 0
                ? "change green"
                : "change red"
            }
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>

         
          <div className="marketcap">
            Mkt Cap: ${coin.market_cap}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Table;