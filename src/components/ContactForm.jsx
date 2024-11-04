import React, { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const serviceKey = import.meta.env.VITE_APP_SERVICE_KEY;
const templateKey = import.meta.env.VITE_APP_TEMPLATE_KEY;
const apiKey = import.meta.env.VITE_APP_API_KEY;

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceKey, templateKey, form.current, apiKey).then(
      () => {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Message not send! Try again",
        });
        console.log("FAILED...", error.text);
      }
    );
    e.target.reset();
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
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm text-red-700">
                * Required
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Name *"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="user_email"
                placeholder="Email *"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone *"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message *"
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
