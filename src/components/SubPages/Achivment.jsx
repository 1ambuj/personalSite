

export default function Achivement({src,title,description}){
    return (
       <div className="flex flex-col justify-center items-center text-center">
          {/* <img src={src} alt="" className="w-28 border border-black p-4 transition-colors duration-300 group-hover:fill-blue-500"/> */}
          {src}
          <h1 className="font-bold text-xl my-3">{title}</h1>
          <p>{description}</p>
       </div>  
    )
}