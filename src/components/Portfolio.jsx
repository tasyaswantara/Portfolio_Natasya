import React, { useState } from "react";
import Clips from "../assets/images/clips2.png";
import Find from "../assets/images/find.jpg";
import Schoolin from "../assets/images/schoolin.jpeg";
import Cultour from "../assets/images/cultour.png";
import Eduhealth from "../assets/images/eduhealth.jpeg";
import Dosang from "../assets/images/dosang.png";
import { Link } from "react-router-dom";

// Data Portofolio
const portfolioItems = [
  {
    id: 1,
    title: "Clips",
    description: "Website link shortener dengan fitur unggulan.",
    code: "https://github.com/clips-id/clip-frontend-v1.git",
    demo: "https://hello.clips.id/",
    image: Clips,
    intro: "Website link shortener yang memiliki fitur unggulan:",
    periode: "July 2024 - Present",
    peran: "Frontend Developer",
    fitur: [
      "Pembuatan QR code secara otomatis.",
      "Kemampuan mengedit link yang telah dibuat.",
      "Menampilkan statistik link (jumlah klik).",
      "Custom slug sesuai keinginan pengguna.",
    ],
    jobdesk: [
      "Mengembangkan antarmuka pengguna (UI) responsif berdasarkan desain tim.",
      "Mengatur logika pembuatan link, fetch data backend, serta error handling.",
      "Mengoptimalkan fungsi aplikasi dan memastikan penyelesaian sesuai tenggat waktu.",
      "Bekerja sama dengan tim Backend, Product Manager, Marketing, dan QC.",
    ],
    teknologi: ["React.js", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Find Your Nanny",
    code: "https://github.com/tasyaswantara/FindYourNanny.git",
    demo: "https://drive.google.com/drive/folders/1-1FhMQVxRoOQD9mPtAh1qEu2pE26Q9PI?usp=sharing",
    description:
      "Aplikasi booking jasa nanny dengan integrasi Google Calendar.",
    image: Find,
    intro: "Aplikasi Android mobile untuk membooking jasa nanny:",
    periode: "Nov 2024",
    peran: "Fullstack Developer",
    fitur: [
      "Merawat bayi, lansia, rumah, dan hewan peliharaan.",
      "Terintegrasi dengan Google Calendar dan WhatsApp.",
      "Menggunakan database Firestore untuk penyimpanan data.",
    ],
    jobdesk: [
      "Mengembangkan sebagian UI bersama tim.",
      "Mengintegrasikan data Firestore ke dalam UI aplikasi.",
      "Menambahkan fitur integrasi Google Calendar untuk membuat event otomatis saat booking.",
      "Implementasi autentikasi menggunakan Firebase Authentication (Google Auth & Email).",
    ],
    teknologi: ["Kotlin", "Jetpack Compose", "Firebase"],
  },
  {
    id: 3,
    title: "Schoolin",
    code: "https://github.com/tasyaswantara/Schoolin_web.git",
    demo: "https://schoolin-web.vercel.app/",
    description: "Web rekomendasi destinasi dengan peta interaktif.",
    image: Schoolin,
    intro: "Website untuk traveler yang menampilkan rekomendasi destinasi:",
    periode: "Nov 2022",
    peran: "Frontend Developer",
    fitur: [
      "Peta interaktif menggunakan Leaflet.",
      "Pemesanan tiket melalui WhatsApp.",
    ],
    jobdesk: [
      "Mengatur logika pengambilan data destinasi.",
      "Mengimplementasikan peta interaktif menggunakan Leaflet.",
      "Menyusun data yang dipilih pengguna untuk pesan pemesanan ke WhatsApp.",
    ],
    teknologi: ["React.js", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Cultour",
    description: "Web edukasi budaya dengan pembelajaran bertahap.",
    demo: "https://cultour1.vercel.app/",
    code: "https://github.com/tasyaswantara/cultour1.git",
    image: Cultour,
    intro: "Website edukasi budaya daerah Indonesia:",
    periode: "Feb 2022 - Mar 2022",
    peran: "Frontend Developer",
    fitur: [
      "Pembelajaran bertahap dari pengenalan daerah, video edukasi, hingga kuis akhir.",
      "Video pembelajaran diembed dari YouTube.",
    ],
    jobdesk: [
      "Mengimplementasikan desain UI dan fitur autentikasi.",
      "Melakukan mapping item untuk tiap langkah pembelajaran.",
      "Menyematkan video dari YouTube ke dalam platform.",
    ],
    teknologi: ["React.js", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "Eduhealth Beta",
    code: "https://github.com/tasyaswantara/EduhealthBeta03.git",
    demo: "https://play.google.com/store/apps/details?id=nutrisoftbank.android.eduhealth&hl=en_US",
    description: "Aplikasi Android untuk mengukur parameter kesehatan.",
    image: Eduhealth,
    intro: "Aplikasi Android yang mengukur parameter kesehatan seperti:",
    periode: "Jun 2024 - Jul 2024",
    peran: "Frontend Developer",
    fitur: [
      "BMI (Body Mass Index).",
      "Potensi kolesterol dan indikator kesehatan lainnya.",
    ],
    jobdesk: [
      "Mengembangkan antarmuka pengguna (UI) menggunakan XML.",
      "Menyusun elemen UI untuk menerima data backend.",
    ],
    teknologi: ["Java", "XML"],
  },
  {
    id: 6,
    title: "Do-Sang",
    description: "Website katalog statis untuk promosi UMKM Dosang Chips.",
    code: "https://github.com/tasyaswantara/Do-sang.git",
    demo: "https://do-sang.vercel.app/",
    image: Dosang,
    intro:
      "Website katalog statis untuk mempromosikan produk UMKM Dosang Chips:",
    periode: "Hingga saat ini",
    peran: "Frontend Developer",
    fitur: [
      "Menampilkan daftar produk dan deskripsi.",
      "Mengarahkan pembelian langsung ke WhatsApp penjual.",
    ],
    jobdesk: [
      "Mengimplementasikan desain yang disediakan.",
      "Mapping data produk dan integrasi pemesanan ke WhatsApp.",
    ],
    teknologi: ["HTML", "CSS", "JavaScript"],
  },
];

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  return (
    <div className="py-[20vh] " id="portfolio">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold">
          My <span className="text-pink-500">Portfolio</span>
        </h2>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer"
            onClick={() => handleCardClick(item)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 object-cover object-top transform transition duration-300 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 text-white bg-gradient-to-t from-pink-600 to-transparent opacity-90 flex flex-col justify-end p-6 transform translate-y-full group-hover:translate-y-0 transition duration-300">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-base mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {showPopup && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm  z-[999] flex justify-center  overflow-y-auto scrollbar-hidden custom-scrollbar">
          <div className="  bg-white w-full md:w-1/2 h-max pb-16   rounded-t-full mt-[15vh] transform transition-all duration-500 animate-slide-up   shadow-2xl shadow-pink-500 ">
            <button
              className="absolute -top-5 md:top-4 right-4 text-gray-600 hover:text-gray-900  bg-pink-200 w-14 h-14  rounded-full  text-2xl"
              onClick={closePopup}
            >
              &times;
            </button>
            <div className=" w-full h-full pt-[10%] md:px-20 px-8">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-96   object-cover object-top rounded-t-full mb-4 shadow-md "
              />
              <div className=" w-full flex items-center gap-4 mt-10">
                <h2 className="text-4xl font-bold mb-4 text-pink-600 w-auto">
                  {selectedItem.title}
                </h2>
                <div className="h-[2px] w-full  bg-pink-500"></div>
              </div>
              <p className=" text-xl font-medium mb-4">
                {selectedItem.description}
              </p>
              <p className=" text-xl font-medium">
                Period:{" "}
                <span className=" text-pink-600"> {selectedItem.periode} </span>
              </p>
              <p className=" text-xl font-medium my-4">
                Role{" "}
                <span className=" text-pink-600">{selectedItem.peran} </span>
              </p>
              <div className="h-[2px] w-full  bg-pink-500 mb-4"></div>

              <p className=" text-xl text-pink-600 font-semibold">Fitur</p>
              <p className="whitespace-pre-line mt-2">{selectedItem.intro}</p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                {selectedItem.fitur.map((detail, index) => (
                  <li key={index} className="whitespace-pre-line mt-2">
                    {detail}
                  </li>
                ))}
              </ul>
              <p className=" text-xl text-pink-600 font-semibold">Teknologi</p>
              <ol className="text-gray-700 flex gap-4 mb-4">
                {selectedItem.teknologi.map((detail, index) => (
                  <li
                    key={index}
                    className=" bg-pink-200 rounded-full h-auto w-auto px-3 py-2 whitespace-pre-line mt-2"
                  >
                    {detail}
                  </li>
                ))}
              </ol>
              <div className="h-[2px] w-full  bg-pink-500 mb-4"></div>
              <p className=" text-xl text-pink-600 font-semibold">Jobdesk</p>
              <ol className="text-gray-700 list-disc list-inside">
                {selectedItem.jobdesk.map((detail, index) => (
                  <li key={index} className="whitespace-pre-line mt-2">
                    {detail}
                  </li>
                ))}
              </ol>

              <div className=" flex gap-4 ">
                <button
                  className="w-full py-2 bg-gradient-to-r from-pink-200 to-blue-300 rounded-lg font-medium shadow-md hover:opacity-90 mt-6"
                  onClick={() => {
                    window.open(selectedItem.code, "_blank"); // Open the demo URL in a new tab
                    closePopup(); // Close the popup after opening the demo
                  }}
                >
                  Code
                </button>
                <button
                  className="w-full py-2 bg-gradient-to-r from-pink-200 to-pink-600 rounded-lg font-medium shadow-md hover:opacity-90 mt-6"
                  onClick={() => {
                    window.open(selectedItem.demo, "_blank"); // Open the demo URL in a new tab
                    closePopup(); // Close the popup after opening the demo
                  }}
                >
                  Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
