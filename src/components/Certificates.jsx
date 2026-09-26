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
      className="bg-slate-950 text-white py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-center
            mb-10
            sm:mb-12
            lg:mb-16
          "
        >
          My <span className="text-cyan-400">Certificates</span>
        </motion.h2>

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
              <a
                href={item.image}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <div
                  className="
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
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full
                      h-full
                      object-contain
                      hover:scale-105
                      transition-transform
                      duration-300
                    "
                  />
                </div>
              </a>

              {/* View Certificate */}
              <a
                href={item.image}
                target="_blank"
                rel="noreferrer"
                className="
                  block
                  text-center
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
                "
              >
                View Certificate
              </a>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certificates;