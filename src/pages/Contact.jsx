// src/pages/ContactPage.jsx
import React, { useState } from "react";
import db  from "../firebase"; // Firestore
import { getFirestore,collection, addDoc } from "firebase/firestore";
import emailjs from "@emailjs/browser";
function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields are required!");
      return;
    }

    setLoading(true);

    try {
      // Save to Firestore
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: new Date(),
      });
       await emailjs.send(
      "service_e1xvs1w" ,   
      "template_jpi20cl",    
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "ultlUR8QDQCZ5ywIz"     // from EmailJS
    );

      alert("✅ Message sent successfully!");

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("❌ Error sending message!");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center">

      <div className="w-full h-64 md:h-80 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Me</h1>
      </div>

      <div className="w-full max-w-2xl p-6 md:p-10 bg-white shadow-2xl rounded-2xl -mt-20">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2"
          />

          <button
            type="submit"
            disabled={loading} 
            className={`w-full text-white font-semibold py-3 rounded-lg ${
              loading ? "bg-gray-400" : "bg-gray-900 hover:bg-indigo-600"
            }`}
            
          >
            {loading ? "Sending..." : "Send Message"}
            
          </button>

        </form>
      </div>
    </div>
  );
}

export default ContactPage;