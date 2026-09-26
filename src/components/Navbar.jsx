import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "education",
    "achievements",
    "certificates",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 sm:px-8 py-4">

        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-bold text-cyan-400 cursor-pointer">
</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-cyan-400 capitalize transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden md:block bg-cyan-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition"
        >
          Resume
        </a>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl text-white cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 text-white">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              className="block px-8 py-4 border-b border-slate-700 cursor-pointer capitalize hover:bg-slate-800"
            >
              {item}
            </Link>
          ))}

          {/* Mobile Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="block px-8 py-4 text-cyan-400 font-semibold hover:bg-slate-800"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;