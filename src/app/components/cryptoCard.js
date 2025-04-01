const CryptoCard = ({ name, symbol, price, change, marketCap, image }) => {
    return (
      <div className="bg-[#0d1321] text-white rounded-lg p-6 w-64 shadow-lg">
        <div className="flex items-center space-x-2">
          <img src={image} alt={name} className="w-8 h-8" />
          <div>
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-sm text-gray-400">{symbol.toUpperCase()}</p>
          </div>
        </div>
  
        <p className="text-2xl font-bold mt-4">${price.toLocaleString()}</p>
        <p className={`mt-2 ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
          {change >= 0 ? '↑' : '↓'} {change.toFixed(2)}%
        </p>
        <p className="text-gray-400 mt-2">MCap: ${marketCap.toLocaleString()}</p>
      </div>
    );
  };
  
  export default CryptoCard;
  