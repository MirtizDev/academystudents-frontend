import React, { useEffect, useState } from 'react';

function ScrollBar() {
  const [progressHeight, setProgressHeight] = useState(0);

  useEffect(() => {
    const updateProgressBar = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const newProgressHeight = (window.scrollY / totalHeight) * 100;
      setProgressHeight(newProgressHeight);
    };

    // Scroll olayını dinleyin
    window.addEventListener('scroll', updateProgressBar);

    // Scroll bileşeni kaldırıldığında olay dinlemeyi temizleyin
    return () => {
      window.removeEventListener('scroll', updateProgressBar);
    };
  }, []);

  const progressBarStyle = {
    height: `${progressHeight}%`,
  };

  return (
    <div>
      <div id="progressBar" style={progressBarStyle}></div>
      <div id="scrollPath"></div>
    </div>
  );
}

export default ScrollBar;
