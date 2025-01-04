
import AboutMedicine from "../../assets/img/about-medicine.png"
import Medicines from "../../assets/img/medicines.jpg"
import Properties from "./properties"
const News = () => {
  return (
    <>
        <div className='flex flex-col justify-around items-center m-10 '>
              <h1 className='text-4xl mb-10'>AB<span className='border-b-4 border-[#10e7f4]'>OUT</span> US</h1>
              <img src={AboutMedicine } alt="about medicine image" className='mb-10' />
              <p className='mb-12 text-lg'>It is a long established fact that a reader will be distracted by the readable content of a page when 
               looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
               distribution of letters, as opposed to using Content here, content here, making it</p>
               <button className="bg-black hover:bg-transparent hover:border hover:border-black text-white hover:text-black px-7 py-2">Read More</button>
           </div> 
          <div className="my-12">
          <Properties /> 
          </div>
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
                      <button className="bg-[#10e7f4] text-white px-8 py-2 hover:bg-[#1e1d1d] border border-[#10e7f4] hover:text-[#10e7f4]">Buy Now</button>
                    </div>
                  </div>
                  <div>
                    <img src={Medicines} alt="medicines" />
                  </div>
                </div>
          
    </>
  )
}

export default News