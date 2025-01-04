
import Medicine from "../../assets/img/medicine.png"
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import Properties  from "./properties"
const Home = () => {
  return (
    <>
    <div className='bg-hero-pattern w-[100vw] text-black bg-center bg-no-repeat flex '>
        <div className='flex pl-12 gap-6 flex-col justify-center'>
            <button><FaCircleArrowLeft className='text-5xl hover:text-white'/></button>
            <button><FaCircleArrowRight className='text-5xl hover:text-white'/></button>
        </div >
          <img src={Medicine} alt="" className='w-[380px] justify-end pt-4'/>
          <div className='mt-10 w-[60%]'>
             <h2 className='text-4xl'>Welcome To Our</h2>
             <h2 className='text-6xl text-white font-semibold by-2'>Online Medicine</h2>
             <p className='text-white'>There are many variation of passages of Lorem ipsum avilable. but the majority have suffered alteration in some form, by injected , or randomised words which don not look even slightly believalble</p>
             <button className='mt-10 bg-black text-white px-8 py-2 hover:bg-white hover:border border-black hover:text-black'>Buy Now</button>
        </div>
    </div>
    <Properties />
    </>
  )
}

export default Home