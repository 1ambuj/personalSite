import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
export default function SubHeader(){
    return (
        <nav className="flex bg-[#10e7f4] justify-between p-2 px-8 items-center w-[100vw] text-white">
           <div className="flex gap-2 justify-center items-center">
             <FaPhoneSquareAlt className="text-2xl" />
              <span >Call : +01 1234567890</span>
           </div>
           <div className="list-none flex gap-6 text-2xl">
              <li><FaFacebookF  /></li>
              <li><IoLogoTwitter /></li>
              <li><FaInstagram /></li>
           </div>
        </nav>
    )
}