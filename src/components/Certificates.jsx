import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

import internship from "../assets/Certificates/internship.jpg";
import java from "../assets/Certificates/Java.png";
import mern from "../assets/Certificates/mern.jpg";
import python from "../assets/Certificates/python.jpg";
import Eduskills from "../assets/Certificates/Eduskills.jpeg";
import Amdox from "../assets/Certificates/Amdox.jpg";
function Certificates() {
  const certificates = [
    {
      title: "Frontend Development Internship",
      organization: "VAISHNAV TECHNOLOGIES / ONLINE",
      year: "2025",
      image: internship,
    },
    {
      title: "MERN Stack Development",
      organization: "AARSH AI TECHNOLOGIES / HYBRID",
      year: "2026",
      image: mern,
    },
     {
      title: "AI-ML Virtual Internship",
      organization: "Eduskills",
      year: "2026",
      image: Eduskills,
    },
     {
      title: "Data Science & Analytics Internship",
      organization: "Amdox Technologies",
      year: "2026",
      image: Amdox,
    },
    {
      title: "Programming in Java",
      organization: "NPTEL Certification",
      year: "2025",
      image: java,
    },
    {
      title: "Python with Data Science",
      organization: "NPTEL Certification",
      year: "2026",
      image: python,
    },
  ];

  return (
    <section
      id="certificates"
      className="bg-slate-950 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My <span className="text-cyan-400">Certificates</span>
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 rounded-xl p-6 border border-cyan-500 shadow-lg"
            >

              <FaCertificate className="text-cyan-400 text-5xl mb-4" />

              <h3 className="text-2xl font-bold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-300">
                {item.organization}
              </p>

              <p className="text-cyan-400 mt-2 mb-4">
                {item.year}
              </p>

              {/* Certificate Image */}
              <a
                href={item.image}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-contain bg-white rounded-lg p-2 border border-gray-300 hover:scale-105 transition duration-300"
                />
              </a>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;