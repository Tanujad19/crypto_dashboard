import React from "react";

function Table({ data }) {
  // When data is not ready
  if (!data || data.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="table-container">
      {data.map((coin) => {
        const change = coin.price_change_percentage_24h;

        return (
          <div className="row" key={coin.id}>
            
            
            <div className="left">
              <img src={coin.image} alt={coin.name} />
              <div className="coin-info">
                <span className="name">{coin.name}</span>
                <span className="symbol">
                  {coin.symbol ? coin.symbol.toUpperCase() : ""}
                </span>
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
                change > 0 ? "change green" : "change red"
              }
            >
              {change !== undefined
                ? change.toFixed(2)
                : "0.00"}%
            </div>

           
            <div className="marketcap">
              Mkt Cap: ${coin.market_cap}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Table;