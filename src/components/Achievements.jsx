import {
  FaCode,
  FaLaptopCode,
  FaBriefcase,
  FaProjectDiagram,
} from "react-icons/fa";

function Achievements() {
  const achievements = [
    {
      icon: <FaProjectDiagram />,
      number: "3+",
      title: "Projects Completed",
    },
    {
      icon: <FaBriefcase />,
      number: "2",
      title: "Internships",
    },
    {
      icon: <FaLaptopCode />,
      number: "MERN",
      title: "Stack Developer",
    },
    {
      icon: <FaCode />,
      number: "2027",
      title: "Graduating",
    },
  ];

  return (
    <section
      id="achievements"
      className="bg-slate-950 py-16 sm:py-20 lg:py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Heading */}
        <h2
          className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-center
            text-cyan-400
            mb-10
            sm:mb-12
            lg:mb-16
          "
        >
          Achievements
        </h2>

        {/* Achievement Cards */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5
            sm:gap-6
            lg:gap-8
          "
        >
          {achievements.map((item, index) => (
            <div
              key={index}
              className="
                bg-slate-800
                rounded-xl
                sm:rounded-2xl
                p-6
                sm:p-7
                lg:p-8
                text-center
                border
                border-slate-700
                hover:border-cyan-400
                hover:shadow-lg
                hover:shadow-cyan-500/20
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              {/* Icon */}
              <div className="flex justify-center mb-4 sm:mb-5">
                <div
                  className="
                    text-4xl
                    sm:text-5xl
                    text-cyan-400
                  "
                >
                  {item.icon}
                </div>
              </div>

              {/* Number */}
              <h3
                className="
                  text-3xl
                  sm:text-4xl
                  font-bold
                  mb-2
                  text-white
                "
              >
                {item.number}
              </h3>

              {/* Title */}
              <p
                className="
                  text-gray-300
                  text-sm
                  sm:text-base
                  leading-6
                "
              >
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