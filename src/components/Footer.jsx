import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 sm:py-10">

        {/* Main Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm sm:text-base">
              © {new Date().getFullYear()}{" "}
              <span className="text-white font-semibold">Suraj Ojha</span>.
              All Rights Reserved.
            </p>

            <p className="text-xs sm:text-sm mt-2 text-gray-500">
              MERN Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 text-xl sm:text-2xl">

            {/* GitHub */}
            <a
              href="https://github.com/ojhasuraj65"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-cyan-400 hover:scale-110 transition-all duration-300"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ojhasuraj06"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-cyan-400 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/ojha_suraj_06?stkn=MXR6YzFldm96ejA2Nw=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-400 hover:scale-110 transition-all duration-300"
            >
              <FaInstagram />
            </a>

            {/* Email */}
            <a
              href="mailto:ojhasuraj05may@gmail.com"
              aria-label="Email"
              className="hover:text-cyan-400 hover:scale-110 transition-all duration-300"
            >
              <FaEnvelope />
            </a>

          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-slate-800 mt-7 pt-5 text-center">
          <p className="text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-1">
            Built with <FaHeart className="text-cyan-400" /> using React &
            Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;