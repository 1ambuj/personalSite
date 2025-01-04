
import Achivement from '../SubPages/Achivment'

import DeliveryIcon from '../Icons/DileveryIcons'
import LicenseIcon from '../Icons/LicenseIcon'
import SupportIcon from '../Icons/SupportIcon';
const Properties = () => {
    const prop = [
      {
        img : <DeliveryIcon className="hover:text-[#10e7f4] hover:border hover:border-[#10e7f4]"/>,
        title : "FAST DELIVERY",
        description: "it is a long established fact that a reader will be distracted by"
      },
      {
        img : <LicenseIcon  className="hover:text-[#10e7f4] hover:border hover:border-[#10e7f4]" />,
        title : "LICENSE OF GOVERMENT",
        description: "it is a long established fact that a reader will be distracted by" 
      },
      {
        img : <SupportIcon  className="hover:text-[#10e7f4] hover:border hover:border-[#10e7f4]" />,
        title : "SUPPORT24/7",
        description: "it is a long established fact that a reader will be distracted by" 
      }
    ]
const renderData = prop.map((item,index)=>{
    return (
        <Achivement key={index} 
           src={item.img}
           title = {item.title}
           description = {item.description}
        />
    )
})
  return (
    <div className="flex justify-around items-center  my-12">
       {renderData}
    </div>
  )
}

export default Properties