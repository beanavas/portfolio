import { useEffect, useState } from 'react';

const CursorBubble = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveHandler);
    return () => window.removeEventListener('mousemove', moveHandler);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 w-8 h-8 bg-[#FFC1CB] opacity-50 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-75"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CursorBubble;

//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
