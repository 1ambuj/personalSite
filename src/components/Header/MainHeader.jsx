import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import Search from "../../assets/img/search-icon.png";
import User from "../../assets/img/user.png";
import { useAuth } from "../../context/authContext";
import { doSignOut } from "../../firebase/auth";

const MainHeader = () => {
  const { currentUser, role } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await doSignOut();
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div className="bg-black py-6 text-white flex items-center justify-between px-6 w-[100vw]">
      <div className="flex gap-4">
      <div className="flex items-center gap-2 mt-7 ">
        <img src={Logo} alt="Logo" className="w-10 rounded-full" />
        <h2 className="font-bold text-xl">SANJU ENTERPRISES</h2>
      </div>


      <div className="flex gap-6 text-lg">
        <Link to="/" className="hover:text-gray-400">HOME</Link>
        <Link to="/about" className="hover:text-gray-400">ABOUT</Link>
        <Link to="/product" className="hover:text-gray-400">MEDICINE</Link>
        <Link to="/buy" className="hover:text-gray-400">ONLINE BUY</Link>
        <Link to="/news" className="hover:text-gray-400">NEWS</Link>
        <Link to="/contact" className="hover:text-gray-400">CONTACT US</Link>
        {role==="admin" && <Link to="/admin/dashboard" className="hover:text-gray-400">ADMIN</Link>}
      </div>
      </div>

    
      <div className="flex items-center gap-6">
      
        <div className="relative ">
         
          <img 
            src={Search} 
            alt="Search Icon" 
            className="absolute w-5 right-2 top-1.5 mr-10"
          />
        </div>

       
        <div className="relative mr-6">
         
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <img src={User} alt="User Icon" className="w-8 h-8 cursor-pointer rounded-full border border-gray-300" />
          </button>

         
          {isOpen && (
            <div className="absolute right-0 mt-2  bg-white border border-gray-300 shadow-md rounded-lg p-2">
              {currentUser ? (
                <>
                  <span className="block text-gray-700 px-4 py-2">{currentUser.email}</span>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left text-red-500 px-4 py-2 hover:bg-red-100 rounded"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login?mode=login" className="block px-4 py-2 text-blue-500 hover:bg-gray-100 rounded">
                    Login
                  </Link>
                  <Link to="/login?mode=signup" className="block px-4 py-2 text-green-500 hover:bg-gray-100 rounded">
                    Signup
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainHeader;



