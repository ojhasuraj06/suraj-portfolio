import heroImg from "../assets/project/pic.jpg";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center pt-24 pb-12"
    >
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="text-cyan-400 text-base sm:text-lg mb-2">
            👋 Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            Suraj <span className="text-cyan-400">Ojha</span>
          </h1>

          <h2 className="text-xl sm:text-2xl mt-5 font-semibold min-h-[32px]">
            <Typewriter
              words={[
                "MERN Stack Developer",
                "Frontend Developer",
                "Backend Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-gray-400 mt-5 max-w-lg mx-auto md:mx-0 leading-7 text-sm sm:text-base">
            Passionate MERN Stack Developer with experience in building
            responsive and scalable web applications using React, Node.js,
            Express.js and MongoDB.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap justify-center md:justify-start gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="border border-cyan-400 text-cyan-400 px-5 py-3 rounded-lg text-sm sm:text-base hover:bg-cyan-400 hover:text-black transition"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl sm:text-3xl mt-7">
            <a
              href="https://github.com/ojhasuraj06"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="hover:text-cyan-400 transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/ojhasuraj06"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="hover:text-cyan-400 transition" />
            </a>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ojhasuraj05may@gmail.com">
              <FaEnvelope className="hover:text-cyan-400 transition" />
            </a>
          </div>
        </motion.div>

        {/* Right - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center order-first md:order-last"
        >
          <img
            src={heroImg}
            alt="Suraj Ojha"
            className="w-[260px] sm:w-[330px] md:w-[450px] lg:w-[500px] max-w-full h-auto object-contain rounded-2xl border-4 border-cyan-400 shadow-[0_0_35px_rgba(34,211,238,0.5)] hover:scale-105 transition-all duration-500"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;