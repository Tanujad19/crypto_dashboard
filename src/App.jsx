import React, { useEffect, useState } from "react";
import Table from "./components/Table";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const API_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  function fetchWithThen() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => console.log(err));
  }

  async function fetchWithAsync() {
    try {
      const res = await fetch(API_URL);
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchWithAsync();
  }, []);

  const filteredData = data.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  function sortByMarketCap() {
    const sorted = [...data].sort(
      (a, b) => b.market_cap - a.market_cap
    );
    setData(sorted);
  }

  function sortByChange() {
    const sorted = [...data].sort(
      (a, b) =>
        b.price_change_percentage_24h -
        a.price_change_percentage_24h
    );
    setData(sorted);
  }

  return (
    <div className="container">
      <h1>Crypto Tracker</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search by Name or Symbol"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={sortByMarketCap}>
          Sort By Mkt Cap
        </button>

        <button onClick={sortByChange}>
          Sort by % Change
        </button>
      </div>

      <Table data={filteredData} />
    </div>
  );
}

export default App;