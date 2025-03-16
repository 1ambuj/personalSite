import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase";


const ProductDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productRef = doc(db, "products", id);
      const productSnap = await getDoc(productRef);

      if (productSnap.exists()) {
        setProduct(productSnap.data());
        console.log(productSnap.data())
      } else {
        console.log("No such product!");
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-4 mx-10">
      <h1 className="my-6 text-3xl font-semibold">{product.name}</h1>
      <img src={product.fullImageUrl} alt={product.name}  />
      <div className="overflow-x-auto mt-6">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Name of Drug</th>
          <th className="border p-2">Scientific Name</th>
          <th className="border p-2">Part of Use</th>
          <th className="border p-2">Percentage</th>
        </tr>
      </thead>
      <tbody>
      {product.specification.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">{item.name || "-"}</td>
              <td className="border p-2">{item.scientificName || "-"}</td>
              <td className="border p-2">{item.partOfUse || "-"}</td>
              <td className="border p-2">{item.percentage ? `${item.percentage} %` : "-"}</td>
            </tr>
          ))}
      </tbody>
    </table>
    </div>
       <div>
       <p className="my-6 font-semibold"><span className="font-semibold text-xl text-[#10e7f4]">Indication : </span> {product.Indication}</p>
        <p className="my-6 font-semibold"><span className="font-semibold text-xl text-[#10e7f4]">Dosage : </span> {product.dosage}</p>
       </div>
    </div>
  );
};

export default ProductDetail;
