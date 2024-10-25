import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-full p-5">
      <div className="bg-white shadow-md rounded-lg flex">
        {/* Left side content */}
        <div className="w-1/2 p-10 bg-teal-500 rounded-l-lg flex flex-col justify-center items-center text-white">
          <h2 className="text-3xl font-bold mb-4">Let's Chat</h2>
          <p className="text-lg mb-2">
            Whether you have a question or simply want to connect.
          </p>
          <p>Feel free to send me a message in the contact form.</p>
        </div>
        {/* Right side form */}
        <div className="w-1/2 p-10">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm text-red-700">* Required</label>
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone *"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows="4"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white font-bold py-2 rounded-md hover:bg-teal-600 transition-all"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
