import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, address, phoneNumber, message } = formData;

    // Format pesan untuk WhatsApp
    const waMessage = `Hello, my name is ${firstName} ${lastName}.%0AAddress: ${address}%0APhone: ${phoneNumber}%0AMessage: ${message}`;

    // Nomor WhatsApp tujuan
    const whatsappNumber = "+6282143199819";

    // Buka WhatsApp dengan pesan yang diformat
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${waMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full " id="contact">
      {/* Contact Form */}
      <div className="pb-16 px-8 w-full max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-20">
          <span className="text-pink-500">Contact</span> Me
        </h2>
        <form className="space-y-8 md:mb-[10vw]" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block font-medium text-gray-600 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border-2 border-black rounded-lg px-4 py-3 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            {/* Last Name */}
            <div>
              <label className="block font-medium text-gray-600 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border-2 border-black rounded-lg px-4 py-3 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            {/* Address */}
            <div>
              <label className="block font-medium text-gray-600 mb-1">
                Address
              </label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border-2 border-black rounded-lg px-4 py-3 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            {/* Phone Number */}
            <div>
              <label className="block font-medium text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border-2 border-black rounded-lg px-4 py-3 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
          </div>
          {/* Message */}
          <div>
            <label className="block font-medium text-gray-600 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-2 border-black rounded-lg px-4 py-3 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
              required
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-pink-500 text-white font-semibold px-10 py-4 text-lg rounded-full hover:bg-pink-600 transition duration-300"
            >
              Send Your Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
