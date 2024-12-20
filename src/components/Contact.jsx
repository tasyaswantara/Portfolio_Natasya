import { useState } from "react";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup,useMap } from "react-leaflet";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import "leaflet/dist/leaflet.css";
import Profil from "../assets/images/profil.svg"

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
  const customMarkerIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Ganti dengan URL gambar Anda
    iconSize: [32, 32], // Ukuran icon (width, height)
    iconAnchor: [16, 32], // Anchor point (titik tengah pada dasar icon)
    popupAnchor: [0, -32], // Posisi popup relatif terhadap anchor
  });
  const LocationInfo = () => {
    const map = useMap();
  
    // Tambahkan kontrol di pojok kiri atas
    L.control
      .attribution({
        position: "topleft",
      })
      .addTo(map);
  
    return (
      <div
      className=" hidden md:flex h-32 w-1/5  flex-col justify-center pl-4 z-40"
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
        }}
      >
        <h3 className="text-xl font-bold">Malang, Jawa Timur</h3>
        <p className=" text-lg">Bulan Terang Utama UJ 29 / 23</p>
       
      </div>
    );
  };
  


  return (
    <div className="flex flex-col items-center justify-center w-full " id="contact">
      {/* Contact Form */}
      <div className="pb-16 px-8 w-full max-w-4xl">
        <h2 className="text-4xl font-bold text-center">
          <span className="text-pink-500">Contact</span> Me
        </h2>
      </div>
        <div className=" py-5 px-5 w-[90vw]">
      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 w-full min-h-[250px]">
      {/* Card 1: Phone */}
      <div className="bg-pink-600 text-white rounded-lg p-5 flex flex-col justify-center items-center shadow-md">
        <FiPhone size={36} className="mb-4" />
        <div className="text-xl font-bold mb-2">(+62) 82143199819</div>
        <p className="text-center">
        Contact me through this number for more information or collaboration.
        </p>
      </div>

      {/* Card 2: Email */}
      <div className="bg-pink-500 text-white rounded-lg p-5 flex flex-col justify-center items-center shadow-md">
        <FiMail size={36} className="mb-4" />
        <div className=" text-lg md:text-xl font-bold mb-2">tasyaswantara@gmail.com</div>
        <p className="text-center">
        Email for questions, suggestions, or collaboration opportunities.
        </p>
      </div>

      {/* Card 3: Location */}
      <div className="bg-white border border-gray-300 rounded-lg p-5 flex flex-col justify-center items-center shadow-md">
        <FiMapPin size={36} className="mb-4 text-gray-700" />
        <div className="text-xl font-bold text-gray-700 mb-2">Malang, Sawojajar</div>
        <p className="text-center text-gray-600">
        I live in Malang, Sawojajar. Open for collaboration in this region.
        </p>
      </div>
    </div>

      {/* Map Section */}
      <div className=" h-72 md:h-[60vh] rounded-lg mb-20 overflow-hidden shadow-md">
      <MapContainer
            center={[-7.9881616,112.6724406]} // Koordinat London Eye
            zoom={16}
            className=" w-full h-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              position={[-7.9881616,112.6724406]}
              icon={customMarkerIcon}
            >
              <Popup>
                <div>
                  <h3 className="text-lg font-bold">lastminute.com London Eye</h3>
                  <p>
                    Riverside Building, County Hall, London SE1 7PB, United Kingdom
                  </p>
                  <div className="text-sm text-gray-600">
                    <span>4.5 ★★★★★</span> (150,120 reviews)
                  </div>
                  <a
                    href="https://goo.gl/maps/YOUR_MAPS_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View larger map
                  </a>
                </div>
              </Popup>
            </Marker>
            <LocationInfo />
          </MapContainer>
      </div>
    </div>
    </div>
  );
};

export default Contact;
