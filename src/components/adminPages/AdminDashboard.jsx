import { useEffect, useState } from "react";
import { db } from "../../Firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
const AdminDashboard = () => {
  const [medicines, setMedicines] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setMedicines(productList);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      setMedicines((prevMedicines) => prevMedicines.filter((medicine) => medicine.id !== id));
    } catch (error) {
      console.error("Error deleting medicine:", error);
    }
  };

  return (
    <div className="p-5">
  <h1 className="text-2xl font-bold mb-4">Medicine Inventory</h1>
  <button
    className="bg-[#D6245A] text-white px-4 py-2 rounded mb-4 flex gap-2 items-center"
    onClick={() => navigate("/admin/medicine-form")}
  >
    Add Medicine
   <FaPlus />
  </button>

  {medicines.length === 0 ? (
    <p className="text-center text-gray-500">No medicines found.</p>
  ) : (
    <table className="w-full table-fixed border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2 w-1/4">Name</th>
          <th className="border p-2 w-1/4">Price</th>
          <th className="border p-2 w-1/4">Stock</th>
          <th className="border p-2 w-1/4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {medicines.map((medicine) => (
          <tr key={medicine.id} className="border">
            <td className="border p-2">{medicine.name}</td>
            <td className="border p-2">₹{medicine.price}</td>
            <td className="border p-2">{medicine.stock}</td>
            <td className="border p-2">
              <div className="flex justify-center gap-4">
                <button
                  className="bg-gray-200 px-3 py-1 rounded flex gap-2 items-center"
                  onClick={() => navigate(`/admin/medicine-form/${medicine.id}`)}
                >
                  <MdModeEdit />
                  Edit
                </button>
                <button
                  className="bg-[#D6245A] text-white px-3 py-1 rounded flex gap-2 items-center"
                  onClick={() => handleDelete(medicine.id)}
                >
                  <RiDeleteBin6Line />
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>
  );
};

export default AdminDashboard;

