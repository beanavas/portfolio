import React, { useState, useEffect } from 'react';

const VisitorCount = () => {
  const [count, setCount] = useState(52);

  useEffect(() => {
    // Check if this is a new visitor
    const hasVisited = localStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      // This is a new visitor, increment the count
      const currentCount = parseInt(localStorage.getItem('visitorCount') || '52');
      const newCount = currentCount + 1;
      
      // Store the new count
      localStorage.setItem('visitorCount', newCount.toString());
      localStorage.setItem('hasVisited', 'true');
      
      setCount(newCount);
    } else {
      // Returning visitor, just display the current count
      const currentCount = parseInt(localStorage.getItem('visitorCount') || '52');
      setCount(currentCount);
    }
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
