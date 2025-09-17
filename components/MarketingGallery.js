import React from 'react';
import Image from 'next/image';
import img02 from '@/public/199736801_528111364899702_5962172630510482343_n-fotor-bg-remover-20240910114832-fotor-bg-remover-2024091012553.765ec470.webp';
import img01 from '@/public/fire logo.webp';
import img03 from '@/public/yasir logo.webp';
import img04 from '@/public/website-logo-1536x323.webp';
import Link from 'next/link';



const MarketingGallery = () => {
  return (
    <div className="lg:w-1/2 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <div className="grid grid-cols-2 gap-3">
        <div
          className="aspect-w-1 aspect-h-5"
        
        >
          <Link href={'https://www.facebook.com/share/V1iw7PPGaX8GjPDD/?mibextid=qi2Omg'} className='shadow-lg w-full h-full bg-gray-100'>
            <div className="bg-gray-100">
              <Image width={700} height={800} className="object-contain w-48 h-64 mx-auto" loading='lazy' src={img01} alt="gallery-image" />
            </div>
          </Link>
        </div>

        <div
          className="aspect-w-1 aspect-h-1"
        
        >
          <Link href={'https://www.facebook.com/share/nPED3eZtdF7rwQ84/?mibextid=qi2Omg'} className='shadow-lg flex justify-center w-full  md:w-3/4 h-3/4 mt-[30%] sm:mt-[20%]  bg-gray-100'>
            <Image width={0} height={0} className="object-contain w-32  mx-auto" loading='lazy' src={img03} alt="gallery-image" />
          </Link>
        </div>

        <div
          className="aspect-w-1 aspect-h-1"
     
        >
          <Link href={'https://www.instagram.com/faikacollection?igsh=dGtnY3d6ejlrcGJ0'} className='shadow-lg ms-auto flex justify-center w-full  md:w-3/4 h-3/4 bg-gray-100'>
            <Image width={0} height={0} className="object-conatin w-36 mx-auto   " loading='lazy' src={img02} alt="gallery-image" />
          </Link>
        </div>

        <div
          className="aspect-w-1 aspect-h-1"
    
        >
          <Link href={'https://web.facebook.com/profile.php?id=100063944297693&_rdc=1&_rdr'} className='shadow-lg w-full h-full  '>
            <div className="bg-gray-100">
              <Image width={0} height={0} className="object-contain w-48 h-64 mx-auto" loading='lazy' src={img04} alt="gallery-image" /> </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MarketingGallery;
