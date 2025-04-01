"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCryptoData } from "../redux/cryptoSlice";
import CryptoCard from "./cryptoCard";

const CryptoList = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.crypto);

  useEffect(() => {
    dispatch(fetchCryptoData(["bitcoin", "ethereum", "solana"]));
  }, [dispatch]);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="bg-gray-900 grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((crypto) => (
        <CryptoCard
          key={crypto.id}
          name={crypto.name}
          symbol={crypto.symbol}
          price={crypto.current_price}
          change={crypto.price_change_percentage_24h}
          marketCap={crypto.market_cap}
          image={crypto.image}
        />
      ))}
    </div>
  );
};

export default CryptoList;
