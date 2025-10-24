'use client';

import React, { useEffect } from 'react';

const AdScriptTwo = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//infantilecombination.com/bLXYV.s/dgGdlB0yYZWhdRiiY/W/5/uQZoX/IV/Ze/m/9DuFZlU/lrkgPaTUU/5-M_jjU/wUNszxIitINJT/kQy/NuTYAZ3nMIwh";
    script.async = true;
    script.referrerPolicy = 'no-referrer-when-downgrade';

    // Insert the script into the page
    document.body.appendChild(script);

    return () => {
      // Clean up the script if the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative  rounded mx-auto max-w-5xl text-center">
      {/* The actual ad will be injected inside this container */}
      <div id="ad-container" className="ad-container">
        {/* Placeholder for Ad */}
        <p className="text-gray-600 text-lg">Ad will be displayed here</p>
      </div>
    </div>
  );
};

export default AdScriptTwo;
