'use client';
// components/AdScript.js
import React, { useEffect } from 'react';

const AdScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = '//infantilecombination.com/bkX.VvsEdCGXls0/Y/WZcY/LeHmz9guWZrUpl/kXPoTHU_5fMajxU-wnNRTuQ/tdN/TNkWyjNFTKAw1pNLQU';
    script.onload = () => {
      console.log('Ad script loaded successfully');
    };

    const adContainer = document.getElementById('ad-container');
    if (adContainer) {
      adContainer.appendChild(script);
    } else {
      console.error('Ad container not found');
    }

    return () => {
      // Cleanup the script if the component unmounts
      if (adContainer) {
        adContainer.removeChild(script);
      }
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

export default AdScript;
