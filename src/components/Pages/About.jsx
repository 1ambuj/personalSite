
import AboutMedicine from "../../assets/img/about-medicine.png"
const About = () => {
  return (
    <div className='flex flex-col justify-around items-center m-10 '>
       <h1 className='text-4xl mb-10'>AB<span className='border-b-4 border-[#10e7f4]'>OUT</span> US</h1>
       <img src={AboutMedicine } alt="about-medicine image" className='mb-10' />
       <p className='mb-12 text-lg'>It is a long established fact that a reader will be distracted by the readable content of a page when 
        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
        distribution of letters, as opposed to using Content here, content here, making it</p>
        <button className="bg-black hover:bg-transparent hover:border hover:border-black text-white hover:text-black px-7 py-2">Read More</button>
    </div>
    
  )
}

export default About