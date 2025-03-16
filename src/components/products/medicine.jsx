import { useEffect, useMemo, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import Health from "../../assets/img/catagory1.png"
import Hair from "../../assets/img/catagory2.png"
import Skin from "../../assets/img/catagory3.png"
import Amazon from "../../assets/img/amazon.png"
import Flipkart from "../../assets/img/flipkart.png"
import TataImg from  "../../assets/img/tataImg.png"

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

 
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [products, search, selectedCategory]);

  return (
    <div className="">
      
      <div className="relative p-6 flex items-center justify-between">
        <div>
          <input
            type="text"
            placeholder="Search by product name"
            className="py-3 px-10 border border-[#ccc] pr-12 rounded-lg mx-6 shadow-md"
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute left-14 top-1/2 transform -translate-y-1/2 px-2">
            <IoSearch />
          </span>
        </div>

        <div className="flex gap-8">
          <CategoryButton
            image={Health}
            label="Health Care"
            isActive={selectedCategory === "Health"}
            onClick={() => setSelectedCategory(selectedCategory === "Health" ? "" : "Health")}
          />
          <CategoryButton
            image={Hair}
            label="Hair"
            isActive={selectedCategory === "Haircare"}
            onClick={() => setSelectedCategory(selectedCategory === "Haircare" ? "" : "Haircare")}
          />
          <CategoryButton
            image={Skin}
            label="Skin"
            isActive={selectedCategory === "Skincare"}
            onClick={() => setSelectedCategory(selectedCategory === "Skincare" ? "" : "Skincare")}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 items-center justify-around">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id} className="border m-4 shadow-sm p-2 w-56 hover:shadow-lg">
          
            <Link to={`/product/${product.id}`} className="block">
              <img src={product.smallImageUrl} alt={product.name} className="w-52 h-52 object-cover mx-auto" />
              <h3 className="font-semibold my-2 text-center border-b border-b-black rounded-none pb-2">{product.name}</h3>
            </Link>

           
            {product.Link && (
              <div className="flex justify-center gap-3 mt-2 items-center ">
                {product.Link.Amazon && (
                  <a
                    href={product.Link.Amazon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <img src={Amazon} alt="Amazon" className="w-16 object-contain " />
                  </a>
                )}
                {product.Link.Flipkart && (
                  <a
                    href={product.Link.Flipkart}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <img src={Flipkart} alt="Flipkart" className="w-10 object-contain" />
                  </a>
                )}
                {product.Link.Onemg && (
                  <a
                    href={product.Link.Onemg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <img src={TataImg} alt="1mg" className="w-10 object-contain rounded-md" />
                  </a>
                )}
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 w-full">No products found</p>
      )}
    </div>

    </div>
  );
};


const CategoryButton = ({ image, label, isActive, onClick }) => {
  return (
    <div className={`flex flex-col items-center cursor-pointer ${isActive ? "border-b-2 border-blue-500" : ""}`} onClick={onClick}>
      <img src={image} alt={label} className="w-20" />
      <h3 className="text-xl font-semibold">{label}</h3>
    </div>
  );
};
export default Products;
