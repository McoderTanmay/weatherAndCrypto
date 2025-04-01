"use client"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCryptoNews } from "../redux/cryptoNewsSlice";

const CryptoNews = () => {
  const dispatch = useDispatch();
  const { news, loading, error } = useSelector((state) => state.cryptoNews);

  useEffect(() => {
    dispatch(fetchCryptoNews());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-6 bg-[#0d1321] text-white">
      <h2 className="text-2xl font-bold mb-4">Latest News</h2>
      <div className="bg-[#131722] rounded-lg shadow-md p-4">
        {news.slice(0, 5).map((article, index) => (
          <a 
            key={article.article_id} 
            href={article.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-4 hover:bg-[#1c2533] transition rounded-lg"
          >
            <h3 className="text-lg font-semibold">{article.title}</h3>
            <div className="flex justify-between text-gray-400 text-sm mt-1">
              <span>{article.source_name || article.source_id}</span>
              <span>{new Date(article.pubDate).toDateString()}</span>
            </div>
            {index < 4 && <hr className="border-gray-700 mt-3" />}
          </a>
        ))}
      </div>
    </div>
  );
};

export default CryptoNews;
