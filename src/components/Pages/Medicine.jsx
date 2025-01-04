import  { useState, useEffect } from 'react';
import Medicines from "../../assets/img/medicines.jpg"
import medicine1 from '../../assets/img/p-6.jpg';
import medicine2 from '../../assets/img/p-6.jpg';
import medicine3 from '../../assets/img/p-6.jpg';
import medicine4 from '../../assets/img/p-6.jpg';
import medicine5 from '../../assets/img/p-6.jpg';
import medicine6 from '../../assets/img/p-6.jpg';
import medicine7 from '../../assets/img/p-6.jpg';
import {FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { IoStar } from 'react-icons/io5';
import { IoMdStarOutline } from 'react-icons/io';



const Medicine = () => {
  const images = [medicine1, medicine2, medicine3, medicine4, medicine5, medicine6, medicine7];
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImages = 4;

  
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

 
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

 
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval); 
  }, [currentIndex]); 

  return (
    <>
      <div className="flex my-10">
        <div className="bg-[#1e1d1d] w-[50%] text-white text-right">
          <div className="text-left w-[50%] ml-auto mr-10">
            <h1 className="mr-12 mt-10 text-5xl font-bold">
              <div className="mb-1">YOU GET</div>
              <div className="mb-1">ANY</div>
              <div className="mb-1">MEDICINE</div>
              <div className="mb-1">
                on <span className="text-[#10e7f4]">10%</span>
              </div>
              <div className="text-[#10e7f4]">DISCOUNT</div>
            </h1>
            <p className="my-6">
              It is a long established fact that a
              <div> reader will be distracted by</div>
            </p>
            <button className="bg-[#10e7f4] text-white px-8 py-2">Buy Now</button>
          </div>
        </div>
        <div>
          <img src={Medicines} alt="medicines" />
        </div>
      </div>

      <div className="w-full my-10">
        <div className="flex justify-between items-center px-10">
          <h1 className="text-4xl font-normal">Vitamins & Supplements</h1>
          <div className="flex gap-4">
            <button
              className="arrow left-arrow bg-black hover:bg-[#10e7f4] text-white px-6 py-3 rounded"
              onClick={prevImage}
            >
              <FaAngleLeft />
            </button>
            <button
              className="arrow right-arrow bg-black hover:bg-[#10e7f4] text-white px-6 py-3 rounded"
              onClick={nextImage}
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
      <div className="carousel-images border border-[#ccc]  border-r-none overflow-hidden relative mx-10">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleImages)}%)`,
          }}
        >
          {[...images, ...images].map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2 border border-[#ccc] w-[250px] mx-2 relative"
            >
              <button className="absolute top-0 left-0 bg-black hover:bg-[#10e7f4] text-white px-4 py-2 shadow-md z-10">
                Buy Now
              </button>

              <img
                src={image}
                alt={`medicine-${index}`}
                className="w-[260px] h-64 object-cover rounded-md"
              />
             <div className='flex justify-between items-center'>
                      <div className='flex text-[#f5c608]'>
                          <IoStar />
                          <IoStar />
                          <IoStar />
                          <IoStar />
                         <IoMdStarOutline />
                       </div>
                       <div className='flex gap-2'>
                          <h3 className='font-bold'>MEDICINE</h3>
                          <p className='font-bold'><span className='text-[#10e7f4]'>$</span>30</p>
                       </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     <div className='text-center my-10'>
        <button className="bg-black px-8 py-2 text-white text-xl hover:bg-transparent hover:text-black border hover:border-black ">See More</button>
     </div>
    </>
  );
};

export default Medicine;