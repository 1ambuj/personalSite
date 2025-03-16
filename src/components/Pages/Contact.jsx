
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    medicine: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,  
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY   
    )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", medicine: "", message: "" });
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      <h1 className="text-5xl m-10">
        <span className="border-b-4 border-[#10e7f4]">REQ</span>UEST A CALL BACK
      </h1>
      <div className="flex m-12 gap-8">
        <div className="w-[50%] max-w-[600px]">
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <div className="my-3">
              <label htmlFor="name" className="block text-lg">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border border-[#ccc] py-2 px-2 my-2" required />
            </div>

            <div className="my-3">
              <label htmlFor="email" className="block text-lg">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-[#ccc] py-2 px-2 my-2" required />
            </div>

            <div className="my-3">
              <label htmlFor="phone" className="block text-lg">Phone Number</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-[#ccc] py-2 px-2 my-2" required />
            </div>

            <div className="my-3">
              <label htmlFor="medicine" className="block text-lg">Select Medicine</label>
              <select id="medicine" name="medicine" value={formData.medicine} onChange={handleChange} className="w-full border border-[#ccc] py-2 px-2 my-2" required>
                <option value="" disabled>Select an option</option>
                <option value="medicine1">Medicine 1</option>
                <option value="medicine2">Medicine 2</option>
                <option value="medicine3">Medicine 3</option>
              </select>
            </div>

            <div className="my-3">
              <label htmlFor="message" className="block text-lg">Message</label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full border border-[#ccc] py-2 px-2 my-2 resize-none" required></textarea>
            </div>

            <div>
              <button type="submit" className="px-10 py-2 text-white rounded bg-black">Send</button>
            </div>
          </form>
        </div>
        <div className="w-[50%] bg-contact-bg bg-center bg-no-repeat text-center flex items-center justify-center">
          <div className="text-white">
            <h1 className="text-4xl my-4 font-bold">Get Now Medicines</h1>
            <p className="text-lg mx-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
