import { useEffect, useState } from 'react'
import { IoStar } from "react-icons/io5";
import medicines1 from '../../assets/img/p-1.jpg';
import medicines2 from '../../assets/img/p-2.jpg';
import medicines3 from '../../assets/img/p-3.jpg';
import medicines4 from '../../assets/img/p-4.jpg';
import medicines5 from '../../assets/img/p-5.jpg';
import medicines6 from '../../assets/img/p-5.jpg';
import medicines7 from '../../assets/img/p-5.jpg';
import medicines8 from '../../assets/img/p-5.jpg';
import medicine1 from '../../assets/img/p-6.jpg';
import medicine2 from '../../assets/img/p-6.jpg';
import medicine3 from '../../assets/img/p-6.jpg';
import medicine4 from '../../assets/img/p-6.jpg';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { IoMdStarOutline } from 'react-icons/io';
const vitaminsImages1 = [medicine1, medicine2, medicine3, medicine4];
const healthImages1 = [medicines1, medicines2, medicines3, medicines4];
const healthImages2 = [medicines5, medicines6, medicines7, medicines8];

const MedicineBuy = () => {
  const [currentIndexVitamins1, setCurrentIndexVitamins1] = useState(0);
  const [currentIndexHealth1, setCurrentIndexHealth1] = useState(0);
  const [currentIndexHealth2, setCurrentIndexHealth2] = useState(0);

  const visibleImages = 4;  // Number of images to show in each row

  // Function to move to next image in Vitamins Row 1
  const nextImageVitamins1 = () => {
    setCurrentIndexVitamins1((prevIndex) => (prevIndex + 1) % vitaminsImages1.length);
  };

  // Function to move to previous image in Vitamins Row 1
  const prevImageVitamins1 = () => {
    setCurrentIndexVitamins1((prevIndex) =>
      prevIndex === 0 ? vitaminsImages1.length - 1 : prevIndex - 1
    );
  };

  // Function to move to next image in Health Row 1
  const nextImageHealth1 = () => {
    setCurrentIndexHealth1((prevIndex) => (prevIndex + 1) % healthImages1.length);
  };

  // Function to move to previous image in Health Row 1
  const prevImageHealth1 = () => {
    setCurrentIndexHealth1((prevIndex) =>
      prevIndex === 0 ? healthImages1.length - 1 : prevIndex - 1
    );
  };

  // Function to move to next image in Health Row 2
  const nextImageHealth2 = () => {
    setCurrentIndexHealth2((prevIndex) => (prevIndex + 1) % healthImages2.length);
  };

  
  const prevImageHealth2 = () => {
    setCurrentIndexHealth2((prevIndex) =>
      prevIndex === 0 ? healthImages2.length - 1 : prevIndex - 1
    );
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      nextImageVitamins1();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndexVitamins1]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImageHealth1();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndexHealth1]);

 
  useEffect(() => {
    const interval = setInterval(() => {
      nextImageHealth2();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndexHealth2]);

  return (
    <>
      <div className="w-full my-10">
        <div className="flex justify-between items-center px-10">
          <h1 className="text-4xl my-10">Medicine & Health</h1>
          <div className="flex gap-4">
            <button
              className="arrow left-arrow bg-black hover:bg-[#10e7f4] text-white px-6 py-3 rounded"
              onClick={prevImageHealth1}
            >
              <FaAngleLeft />
            </button>
            <button
              className="arrow right-arrow bg-black hover:bg-[#10e7f4] text-white px-6 py-3 rounded"
              onClick={nextImageHealth1}
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Section for Health Row 1 */}
      <div className="carousel-images border border-[#ccc] overflow-hidden relative mx-10">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndexHealth1 * (100 / visibleImages)}%)`,
          }}
        >
          {[...healthImages1, ...healthImages1].map((image, index) => (
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

      {/* Carousel Section for Health Row 2 */}
      <div className="carousel-images border border-[#ccc] overflow-hidden relative mx-10 mt-8">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndexHealth2 * (100 / visibleImages)}%)`,
          }}
        >
          {[...healthImages2, ...healthImages2].map((image, index) => (
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

      <div className="w-full my-10">
        <div className="flex justify-between items-center px-10">
          <h1 className="text-4xl my-10">Vitamins & Supplements</h1>
          <div className="flex gap-4">
            <button
              className="arrow left-arrow bg-black hover:bg-[#10e7f4] text-white px-6 py-3 rounded"
              onClick={prevImageVitamins1}
            >
              <FaAngleLeft />
            </button>
            <button
              className="arrow right-arrow bg-black hover:bg-[#10e7f4] text-white px-6 py-3 rounded"
              onClick={nextImageVitamins1}
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Section for Vitamins Row 1 */}
      <div className="carousel-images border border-[#ccc] overflow-hidden relative mx-10">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndexVitamins1 * (100 / visibleImages)}%)`,
          }}
        >
          {[...vitaminsImages1, ...vitaminsImages1].map((image, index) => (
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
        <button className="bg-black px-8 py-2 text-white text-xl hover:bg-transparent hover:text-black border hover:border-black my-10">
          See More
        </button>
      </div>
    </>
  );
};

export default MedicineBuy;