'use client'

import React, { useState } from 'react';
import "./style.css";

interface Person {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}

const CollectionSpotlight: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const people: Person[] = [
    { id: 1, name: 'John Doe', imageUrl: 'https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nkp1Is~dcRKVSVj8GNhxNLMJ7gTEzNDkf8VtD-OryJ0sykh1lwmV-ewiigHPS4njhKjcfYNYHzNtka9sa6DQdjxPUZR6L9ziTFWXse30L5RapCCt5H7T5jsZsMoP09PSNj4-HiVCjoqXwVAVEAhZm~f924bZogIfzfxFc0gC3OPjXnfM2b3~W2jRmsFQJYQxHVAHE2c0YUjzBlbFgDwCD5VY6C~tF71RtERjrsoOZMrojXSQzoPhqcCyNZY5lTX7IFlGbpi-1d4QbKSqih3hrizl6afTuUEfMU-y2fpz3lLyQ3EWMCMLQ8RwiBLAvOcsMkDiPhzFhKCJR0~L6GgGBQ__', description: 'Basketball' },
    { id: 2, name: 'Jane Smith', imageUrl: 'https://s3-alpha-sig.figma.com/img/3de4/4e83/b6e3aeda879dc6f22f94711c788789b5?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ptz8aSbr1X2gpkQvNp75uy5Qqc3G8thxATUNJrSlH2UpQlPHInbDDZzPDm06nh~Nz5I1JJ4DJV7c8-QhyhII56mMhaJJpXXDp1PCUpSFQ4e8Ye14EdQY91xENMHr1f0JdG2SSkVcxAMgzFhchgpPmcJgVvZX42PQo9HDwrB-Mu9YzL8HDg5lqq592kuVfpcoCk2mmirfFLs7nHYKlxKizeHFC38nNStqJTHYUJHGziz0RNo2oRTX9lYT5MCG0g7fSSu968zB9IjW7Xu5z337Wt3fLdxiQu12YbUec3D-iYVeMH-6xRitiF8XgVwKniDwWIEs6yrvu122pOCHDB~P6g__', description: 'Soccer' },
    { id: 4, name: 'Alice Johnson', imageUrl: 'https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nkp1Is~dcRKVSVj8GNhxNLMJ7gTEzNDkf8VtD-OryJ0sykh1lwmV-ewiigHPS4njhKjcfYNYHzNtka9sa6DQdjxPUZR6L9ziTFWXse30L5RapCCt5H7T5jsZsMoP09PSNj4-HiVCjoqXwVAVEAhZm~f924bZogIfzfxFc0gC3OPjXnfM2b3~W2jRmsFQJYQxHVAHE2c0YUjzBlbFgDwCD5VY6C~tF71RtERjrsoOZMrojXSQzoPhqcCyNZY5lTX7IFlGbpi-1d4QbKSqih3hrizl6afTuUEfMU-y2fpz3lLyQ3EWMCMLQ8RwiBLAvOcsMkDiPhzFhKCJR0~L6GgGBQ__', description: 'Tennis' },
    { id: 5, name: 'Alice Johnson', imageUrl: 'https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nkp1Is~dcRKVSVj8GNhxNLMJ7gTEzNDkf8VtD-OryJ0sykh1lwmV-ewiigHPS4njhKjcfYNYHzNtka9sa6DQdjxPUZR6L9ziTFWXse30L5RapCCt5H7T5jsZsMoP09PSNj4-HiVCjoqXwVAVEAhZm~f924bZogIfzfxFc0gC3OPjXnfM2b3~W2jRmsFQJYQxHVAHE2c0YUjzBlbFgDwCD5VY6C~tF71RtERjrsoOZMrojXSQzoPhqcCyNZY5lTX7IFlGbpi-1d4QbKSqih3hrizl6afTuUEfMU-y2fpz3lLyQ3EWMCMLQ8RwiBLAvOcsMkDiPhzFhKCJR0~L6GgGBQ__', description: 'Tennis' },
    { id: 6, name: 'Alice Johnson', imageUrl: 'https://s3-alpha-sig.figma.com/img/3de4/4e83/b6e3aeda879dc6f22f94711c788789b5?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ptz8aSbr1X2gpkQvNp75uy5Qqc3G8thxATUNJrSlH2UpQlPHInbDDZzPDm06nh~Nz5I1JJ4DJV7c8-QhyhII56mMhaJJpXXDp1PCUpSFQ4e8Ye14EdQY91xENMHr1f0JdG2SSkVcxAMgzFhchgpPmcJgVvZX42PQo9HDwrB-Mu9YzL8HDg5lqq592kuVfpcoCk2mmirfFLs7nHYKlxKizeHFC38nNStqJTHYUJHGziz0RNo2oRTX9lYT5MCG0g7fSSu968zB9IjW7Xu5z337Wt3fLdxiQu12YbUec3D-iYVeMH-6xRitiF8XgVwKniDwWIEs6yrvu122pOCHDB~P6g__', description: 'Tennis' },
    { id: 7, name: 'Alice Johnson', imageUrl: 'https://s3-alpha-sig.figma.com/img/3de4/4e83/b6e3aeda879dc6f22f94711c788789b5?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ptz8aSbr1X2gpkQvNp75uy5Qqc3G8thxATUNJrSlH2UpQlPHInbDDZzPDm06nh~Nz5I1JJ4DJV7c8-QhyhII56mMhaJJpXXDp1PCUpSFQ4e8Ye14EdQY91xENMHr1f0JdG2SSkVcxAMgzFhchgpPmcJgVvZX42PQo9HDwrB-Mu9YzL8HDg5lqq592kuVfpcoCk2mmirfFLs7nHYKlxKizeHFC38nNStqJTHYUJHGziz0RNo2oRTX9lYT5MCG0g7fSSu968zB9IjW7Xu5z337Wt3fLdxiQu12YbUec3D-iYVeMH-6xRitiF8XgVwKniDwWIEs6yrvu122pOCHDB~P6g__', description: 'Tennis' },
    // Add more people as needed
  ];

  const handleNext = () => {
    const newIndex = startIndex + 1 >= people.length ? 0 : startIndex + 1;
    setStartIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = startIndex - 1 < 0 ? people.length - 1 : startIndex - 1;
    setStartIndex(newIndex);
  };
  
  return (
    <div className="flex justify-center items-center mt-5">
      
      <div onClick={handlePrev} className="m-2 w-8 h-12 border-solid border-2 flex justify-center items-center" style={{ color: 'rgba(44, 156, 240, 1)' }}>
        {/* Left arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="svg-icon"
          style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }}
          viewBox="0 0 1024 1024"
          version="1.1"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M442.5 512l273.1-273.1c25-25 25-65.5 0-90.5s-65.5-25-90.5 0l-316.7 316.7c-12.9 12.9-19.2 30-18.7 47-0.4 16.9 5.8 33.9 18.7 46.8l316.8 316.8c25 25 65.5 25 90.5 0s25-65.5 0-90.5l-273.2-273.2z"
            fill="rgba(44, 156, 240, 1)"
          />
        </svg>
      </div>
      <div className="flex">
        {people.map((person, index) => (
          <div
            key={person.id}
            className={`main ${
              index >= startIndex && index < startIndex + 3 ? '' : 'hidden'
            }`}
          >
            <div className="sub1">
            <Image src={person.imageUrl} alt="" className="im1"/>
         </div>
         <div className="divider">
            <div className="ellipse"></div>
    <div className="linebr"></div>
    <div className="ellipse2"></div>
         </div>
         <div className="event-info">
            <b><p className="event-name">Las Vegas Aviators</p></b>
            <p className="event-date">OCT 15 | SUN | 4:30 PM</p>
            <p className="event-location">Las Vegas Ballpark, Las Vegas, Nevada</p>
            <button className="event-collection">Take Flight Collection</button>
            
          </div>
          </div>
        ))}
      </div>
      <div onClick={handleNext} className=" m-2 w-8 h-12 border-solid border-2 flex justify-center items-center" style={{ color: 'rgba(44, 156, 240, 1)' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="svg-icon"
            style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }}
            viewBox="0 0 1024 1024"
            version="1.1"
          >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M581.5 512l-273.1-273.1c-25-25-25-65.5 0-90.5s65.5-25 90.5 0l316.7 316.7c12.9 12.9 19.2 30 18.7 47 0.4 16.9-5.8 33.9-18.699 46.8l-316.8 316.8c-25 25-65.5 25-90.5 0s-25-65.5 0-90.5l273.2-273.2z"
            fill="rgba(44, 156, 240, 1)"
          />
        </svg>
      </div>
    </div>
  );
};

export default CollectionSpotlight;
