
import React from 'react';
import Image from 'next/image';
import img01 from '@/public/How-to-create-an-online-course.jpg.webp';



const CourseImg = () => {
  return (
    <div className="lg:w-1/2 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <div className="grid gap-3">
        <div
          className="relative"        
        >
          <Image
            src={img01}
            alt="Course Image"           
            width={1200} 
            height={800} 
            className="object-contain"
            loading='lazy'
          />
        </div>
      </div>
    </div>
  );
};

export default CourseImg;
