import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";

const MedicineForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    Indication: "",
    category: "",
    dosage: "",
    fullImageUrl: "",
    smallImageUrl: "",
    Link: {
      Amazon: "",
      Flipkart: "",
      Onemg: "",
    },
  });

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setIsEditing(true);
      setLoading(true);
      const fetchMedicine = async () => {
        try {
          const docRef = doc(db, "products", id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setFormData(docSnap.data());
          }
        } catch (error) {
          console.error("Error fetching medicine:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchMedicine();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
   
    if (name.startsWith("Link.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        link: {
          ...prev.Link, 
          [field]: value, 
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const price = Number(formData.price);
    const stock = Number(formData.stock);

    if (!formData.name || formData.name.trim() === "") {
      alert("Medicine name is required.");
      return;
    }
    if (isNaN(price) || formData.price === "") {
      alert("Price is required.");
      return;
    }
    if (isNaN(stock) || formData.stock === "") {
      alert("Stock is required.");
      return;
    }

    if (price < 0 || stock < 0) {
      alert("Price and stock cannot be negative.");
      return;
    }

    try {
      if (isEditing) {
        await updateDoc(doc(db, "products", id), formData);
        alert("Medicine updated successfully!");
      } else {
        await addDoc(collection(db, "products"), formData);
        alert("Medicine added successfully!");
      }
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Error saving medicine:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">
        {isEditing ? "Edit Medicine" : "Add Medicine"}
      </h2>

      {loading ? (
        <p className="text-gray-500">Loading medicine details...</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Medicine Name" value={formData.name} onChange={handleChange} required className="border p-2 w-full" />
          <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required className="border p-2 w-full" />
          <input type="number" name="stock" placeholder="Stock Quantity" value={formData.stock} onChange={handleChange} required className="border p-2 w-full" />
          <textarea name="indication" placeholder="Indication" value={formData.Indication} onChange={handleChange} className="border p-2 w-full" />
          <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} className="border p-2 w-full" />
          <textarea name="dosage" placeholder="Dosage" value={formData.dosage} onChange={handleChange} className="border p-2 w-full" />
          <input type="text" name="fullImageUrl" placeholder="Full Image URL" value={formData.fullImageUrl} onChange={handleChange} className="border p-2 w-full" />
          <input type="text" name="smallImageUrl" placeholder="Small Image URL" value={formData.smallImageUrl} onChange={handleChange} className="border p-2 w-full" />
          <h3 className="font-bold mt-2">Buy Links</h3>
            <input
              type="text"
              name="link.Amazon"
              placeholder="Amazon Link"
              value={formData.Link?.Amazon || ""} 
              onChange={handleChange}
              className="border p-2 w-full"
            />
            <input
              type="text"
              name="link.Flipkart"
              placeholder="Flipkart Link"
              value={formData.Link?.Flipkart || ""} 
              onChange={handleChange}
              className="border p-2 w-full"
            />
            <input
              type="text"
              name="link.Onemg"
              placeholder="1mg Link"
              value={formData.Link?.Onemg || ""} 
              onChange={handleChange}
              className="border p-2 w-full"
            />


          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            {isEditing ? "Update Medicine" : "Add Medicine"}
          </button>
        </form>
      )}
    </div>
  );
};

export default MedicineForm;
