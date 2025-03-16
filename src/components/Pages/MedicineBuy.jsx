import { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { IoMdStarOutline } from 'react-icons/io';
import { IoStar } from 'react-icons/io5';

const MedicineBuy = ({ products }) => {
  const [currentIndexHealth, setCurrentIndexHealth] = useState(0);
  const [currentIndexVitamins, setCurrentIndexVitamins] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const visibleImages = 4;

  const healthProducts = products.filter((p) => p.category === 'Health');
  const vitaminsProducts = products.filter(
    (p) => p.category === 'Health' && p.subcategory === 'Vitamins & Supplements'
  );

  const nextImageHealth = () => {
    setCurrentIndexHealth((prev) => (prev + 1) % healthProducts.length);
  };
  const prevImageHealth = () => {
    setCurrentIndexHealth((prev) => (prev === 0 ? healthProducts.length - 1 : prev - 1));
  };

  const nextImageVitamins = () => {
    setCurrentIndexVitamins((prev) => (prev + 1) % vitaminsProducts.length);
  };
  const prevImageVitamins = () => {
    setCurrentIndexVitamins((prev) => (prev === 0 ? vitaminsProducts.length - 1 : prev - 1));
  };

  // Auto-scroll effect
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextImageHealth();
        nextImageVitamins();
      }, 2000); // Scrolls every 2 seconds
      return () => clearInterval(interval);
    }
  }, [isPaused, currentIndexHealth, currentIndexVitamins]);

  return (
    <>
      <div className="w-full my-10">
        <div className="flex justify-between items-center px-10">
          <h1 className="text-4xl my-10">Medicine & Health</h1>
          <div className="flex gap-4">
            <button className="arrow bg-black text-white px-6 py-3 rounded" onClick={prevImageHealth}><FaAngleLeft /></button>
            <button className="arrow bg-black text-white px-6 py-3 rounded" onClick={nextImageHealth}><FaAngleRight /></button>
          </div>
        </div>
      </div>

      <div 
        className="carousel-images border overflow-hidden relative mx-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndexHealth * (100 / visibleImages)}%)` }}>
          {healthProducts.map((product) => (
            <div key={product.id} className="flex-shrink-0 px-2 w-[250px] mx-2 relative border">
              <img src={product.smallImageUrl} alt={product.name} className="w-[260px] h-64 object-cover rounded-md" />
              <div className='flex justify-between items-center'>
                <div className='flex text-[#f5c608]'>
                  {[...Array(5)].map((_, i) => (i < product.rating ? <IoStar key={i} /> : <IoMdStarOutline key={i} />))}
                </div>
                <div className='flex gap-2'>
                  <h3 className='font-bold'>{product.name}</h3>
                  <p className='font-bold text-[#10e7f4]'>${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {vitaminsProducts.length > 0 && (
        <>
          <div className="w-full my-10">
            <div className="flex justify-between items-center px-10">
              <h1 className="text-4xl my-10">Vitamins & Supplements</h1>
              <div className="flex gap-4">
                <button className="arrow bg-black text-white px-6 py-3 rounded" onClick={prevImageVitamins}><FaAngleLeft /></button>
                <button className="arrow bg-black text-white px-6 py-3 rounded" onClick={nextImageVitamins}><FaAngleRight /></button>
              </div>
            </div>
          </div>

          <div 
            className="carousel-images border overflow-hidden relative mx-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndexVitamins * (100 / visibleImages)}%)` }}>
              {vitaminsProducts.map((product) => (
                <div key={product.id} className="flex-shrink-0 px-2 w-[250px] mx-2 relative border">
                  <img src={product.smallImageUrl} alt={product.name} className="w-[260px] h-64 object-cover rounded-md" />
                  <div className='flex justify-between items-center'>
                    <div className='flex text-[#f5c608]'>
                      {[...Array(5)].map((_, i) => (i < product.rating ? <IoStar key={i} /> : <IoMdStarOutline key={i} />))}
                    </div>
                    <div className='flex gap-2'>
                      <h3 className='font-bold'>{product.name}</h3>
                      <p className='font-bold text-[#10e7f4]'>${product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MedicineBuy;
