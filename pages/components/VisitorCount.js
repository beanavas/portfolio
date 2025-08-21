import React, { useState, useEffect } from 'react';

const VisitorCount = () => {
  const [count, setCount] = useState(52);

  useEffect(() => {
    // Simulate a visitor count that increases over time
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 30000); // Increment every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="bg-white bg-opacity-20 rounded-full px-4 py-2 flex items-center space-x-2">
        <span className="text-white text-sm font-medium">👥 Visitors:</span>
        <span className="text-white text-lg font-bold">{count.toLocaleString()}</span>
        <i className="fas fa-heart text-[#FFC1CB] text-sm animate-pulse"></i>
      </div>
    </div>
  );
};

export default VisitorCount;
