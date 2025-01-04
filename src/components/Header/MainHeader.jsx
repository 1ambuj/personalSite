
import Logo from "../../assets/img/logo.png"
import Search from "../../assets/img/search-icon.png"
import User from "../../assets/img/user.png"
import {Link } from "react-router-dom"
const MainHeader = () => {
  return (
    <div className="bg-black  py-8 text-white flex items-center justify-between p-6 w-[100vw]">
      <div className="flex gap-1">
         <img src={Logo} alt="Logo" />
         <h2 className="font-bold text-xl">MEDION</h2>
      </div>
      <div className="flex list-none gap-7 mb-7 text-xl mx-4 align-center justify-center ">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/medicine">MEDICINE</Link>
        <Link to="/buy">ONLINE BUY</Link>
        <Link to="/news">NEWS</Link>
        <Link to="/contact">CONTACT US</Link>
      </div>
      <div className="flex pr-2 justify-center items-center gap-6">
        <div className="relative">
            <img src={Search} alt="Search icons" className="absolute w-5 right-0 top-1 right-1" />
            <input type="text" placeholder="SEARCH" className="py-1 px-4 text-black border-none"/>
           
        </div>
        <div className="flex gap-2">
            <img src={User} alt="user icon" className="" />
            <h3>LOGIN</h3>
        </div>
      </div>
    </div>
  )
}

export default MainHeader