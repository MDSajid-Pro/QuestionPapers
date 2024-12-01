import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const serviceKey = import.meta.env.VITE_APP_SERVICE_KEY;
const templateKey = import.meta.env.VITE_APP_TEMPLATE_KEY;
const apiKey = import.meta.env.VITE_APP_API_KEY;

export const ContactForm = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const formElements = form.current.elements;
    const newErrors = {};

    // Validate name
    if (!formElements.user_name.value.trim()) {
      newErrors.user_name = "Name is required";
    }

    // validate Course & Semester
    if (!formElements.user_course.value.trim()) {
      newErrors.user_course = "Course & Semester is required";
    }

    // Validate email
    const emailValue = formElements.user_email.value.trim();
    if (!emailValue) {
      newErrors.user_email = "Valid email is required";
    } else if (!/\S+@gmail\.com$/.test(emailValue)) {
      newErrors.user_email = "Email must end with @gmail.com";
    }

    // Validate phone
    const phoneValue = formElements.phone.value.trim();
    if (!phoneValue) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phoneValue)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    // Validate message
    if (!formElements.message.value.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please fill out all required fields correctly.",
      });
      return;
    }

    emailjs.sendForm(serviceKey, templateKey, form.current, apiKey).then(
      () => {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
        form.current.reset();
        setErrors({});
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Message not sent! Please try again.",
        });
        console.error("FAILED...", error.text);
      }
    );
  };

  return (
    <div className="flex justify-center items-center min-h-px p-5 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-4xl">
        {/* Left Section */}
        <div className="md:w-1/2 p-8 bg-teal-500 text-white rounded-t-lg md:rounded-l-lg md:rounded-tr-none flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4">Let's Chat</h2>
          <p className="text-lg mb-2">Have questions or want to connect?</p>
          <p>Feel free to send me a message via the contact form.</p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact</h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            noValidate
            className="space-y-4"
          >
            {/* Name */}
            <div>
              <label className="block mb-1 text-sm text-red-700">
                * Required
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Name *"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                  errors.user_name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.user_name && (
                <small className="text-red-500">{errors.user_name}</small>
              )}
            </div>

            {/* Course & Semester */}
            <div>
              <input
                type="text"
                name="user_course"
                placeholder="Course & Semester *"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                  errors.user_course ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.user_course && (
                <small className="text-red-500">{errors.user_course}</small>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="user_email"
                placeholder="Email *"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                  errors.user_email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.user_email && (
                <small className="text-red-500">{errors.user_email}</small>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone (10 digits) *"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <small className="text-red-500">{errors.phone}</small>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Message *"
                rows="4"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              ></textarea>
              {errors.message && (
                <small className="text-red-500">{errors.message}</small>
              )}
            </div>

            {/* Submit Button */}
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
