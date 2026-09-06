import heroImg from "../assets/project/pic.jpg";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 text-lg mb-2">👋 Hello, I'm</p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Suraj <span className="text-cyan-400">Ojha</span>
          </h1>

          <h2 className="text-2xl mt-6 font-semibold">
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

          <p className="text-gray-400 mt-6 max-w-lg leading-7">
            Passionate MERN Stack Developer with experience in building
            responsive and scalable web applications using React, Node.js,
            Express.js and MongoDB.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-3xl mt-8">
            <a
              href="https://github.com/ojhasuraj65"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="hover:text-cyan-400 transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/suraj-ojha-928713306"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="hover:text-cyan-400 transition" />
            </a>

            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=ojhasuraj05may@gmail.com"
  target="_blank"
  rel="noreferrer"
>
  <FaEnvelope className="hover:text-cyan-400 transition" />
</a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
  src={heroImg}
  alt="Suraj Ojha"
  className="w-[420px] md:w-[500px] h-auto object-contain rounded-2xl border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:scale-105 transition-all duration-500"
/>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;