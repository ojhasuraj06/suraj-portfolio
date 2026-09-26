import { useState } from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaTimes, FaExpand } from "react-icons/fa";

import internship from "../assets/Certificates/internship.jpg";
import java from "../assets/Certificates/Java.png";
import mern from "../assets/Certificates/mern.jpg";
import python from "../assets/Certificates/python.jpg";
import Eduskills from "../assets/Certificates/Eduskills.jpeg";
import Amdox from "../assets/Certificates/Amdox.jpg";

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

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
    <>
      <section
        id="certificates"
        className="bg-slate-950 text-white py-16 sm:py-20 lg:py-24"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <p className="text-cyan-400 text-sm sm:text-base font-semibold mb-2">
              My Achievements
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              My <span className="text-cyan-400">Certificates</span>
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-7">
              Certifications and internships that represent my learning,
              technical skills, and professional experience.
            </p>
          </motion.div>

          {/* Certificate Cards */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
              sm:gap-7
              lg:gap-8
            "
          >
            {certificates.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                }}
                className="
                  bg-slate-900
                  rounded-xl
                  sm:rounded-2xl
                  p-5
                  sm:p-6
                  border
                  border-cyan-500/50
                  shadow-lg
                  hover:shadow-cyan-500/30
                  hover:border-cyan-400
                  transition-all
                  duration-300
                "
              >

                {/* Certificate Icon */}
                <div className="mb-4">
                  <FaCertificate
                    className="
                      text-cyan-400
                      text-4xl
                      sm:text-5xl
                    "
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    font-bold
                    mb-2
                    leading-snug
                  "
                >
                  {item.title}
                </h3>

                {/* Organization */}
                <p className="text-gray-300 text-sm sm:text-base leading-6">
                  {item.organization}
                </p>

                {/* Year */}
                <p className="text-cyan-400 mt-2 mb-4 font-semibold">
                  {item.year}
                </p>

                {/* Certificate Image */}
                <button
                  type="button"
                  onClick={() => setSelectedCertificate(item)}
                  className="
                    block
                    w-full
                    text-left
                    cursor-pointer
                  "
                >
                  <div
                    className="
                      relative
                      w-full
                      h-48
                      sm:h-52
                      lg:h-56
                      bg-white
                      rounded-lg
                      p-2
                      border
                      border-gray-300
                      overflow-hidden
                      group
                    "
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        w-full
                        h-full
                        object-contain
                        group-hover:scale-105
                        transition-transform
                        duration-300
                      "
                    />

                    {/* Preview Overlay */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-slate-950/60
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-300
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <span
                        className="
                          flex
                          items-center
                          gap-2
                          bg-cyan-400
                          text-black
                          px-4
                          py-2
                          rounded-lg
                          font-semibold
                          text-sm
                        "
                      >
                        <FaExpand />
                        Preview
                      </span>
                    </div>
                  </div>
                </button>

                {/* View Certificate */}
                <button
                  type="button"
                  onClick={() => setSelectedCertificate(item)}
                  className="
                    w-full
                    mt-4
                    py-2
                    rounded-lg
                    border
                    border-cyan-400
                    text-cyan-400
                    text-sm
                    sm:text-base
                    font-semibold
                    hover:bg-cyan-400
                    hover:text-black
                    transition
                    cursor-pointer
                  "
                >
                  View Certificate
                </button>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            bg-black/80
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-4
            sm:p-6
          "
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="
              relative
              w-full
              max-w-5xl
              max-h-[90vh]
              bg-slate-900
              rounded-xl
              sm:rounded-2xl
              p-3
              sm:p-5
              border
              border-cyan-400/50
              shadow-[0_0_40px_rgba(34,211,238,0.2)]
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              className="
                absolute
                top-2
                right-2
                sm:top-3
                sm:right-3
                z-10
                w-9
                h-9
                sm:w-10
                sm:h-10
                rounded-full
                bg-slate-950
                text-white
                flex
                items-center
                justify-center
                hover:bg-cyan-400
                hover:text-black
                transition
                cursor-pointer
              "
              aria-label="Close certificate preview"
            >
              <FaTimes />
            </button>

            {/* Modal Title */}
            <div className="pr-12 mb-4">
              <h3 className="text-lg sm:text-2xl font-bold">
                {selectedCertificate.title}
              </h3>

              <p className="text-cyan-400 text-sm mt-1">
                {selectedCertificate.organization} •{" "}
                {selectedCertificate.year}
              </p>
            </div>

            {/* Large Certificate */}
            <div
              className="
                bg-white
                rounded-lg
                overflow-auto
                max-h-[70vh]
                flex
                items-center
                justify-center
                p-2
              "
            >
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="
                  max-w-full
                  max-h-[65vh]
                  w-auto
                  h-auto
                  object-contain
                "
              />
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default Certificates;