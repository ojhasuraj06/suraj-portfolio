import { FaCode, FaLaptopCode, FaBriefcase, FaProjectDiagram } from "react-icons/fa";

function Achievements() {
  const achievements = [
    {
      icon: <FaProjectDiagram className="text-5xl text-cyan-400" />,
      number: "3+",
      title: "Projects Completed",
    },
    {
      icon: <FaBriefcase className="text-5xl text-cyan-400" />,
      number: "2",
      title: "Internships",
    },
    {
      icon: <FaLaptopCode className="text-5xl text-cyan-400" />,
      number: "MERN",
      title: "Stack Developer",
    },
    {
      icon: <FaCode className="text-5xl text-cyan-400" />,
      number: "2027",
      title: "Graduating",
    },
  ];

  return (
    <section id="achievements" className="bg-slate-950 py-24 text-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          Achievements
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 text-center hover:scale-105 transition"
            >
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold mb-2">
                {item.number}
              </h3>

              <p className="text-gray-300">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;