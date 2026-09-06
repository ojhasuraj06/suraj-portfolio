import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6">
              MERN Stack Developer
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Hello! I'm <span className="text-cyan-400 font-semibold">Suraj Ojha</span>,
              a passionate MERN Stack Developer with hands-on experience in
              building responsive, scalable, and user-friendly web applications.
              I enjoy creating modern websites using React.js, Node.js,
              Express.js, and MongoDB.
            </p>

            <p className="text-gray-300 leading-8 mt-5 text-lg">
  I have completed a <span className="text-cyan-400 font-semibold">
    Frontend Development Internship
  </span> at <span className="text-cyan-400 font-semibold">
    Vaishnav Technologies
  </span>, where I worked on real-world projects and enhanced my frontend development skills.
</p>

<p className="text-gray-300 leading-8 mt-5 text-lg">
  I also completed a <span className="text-cyan-400 font-semibold">
    MERN Stack Development Internship
  </span> at <span className="text-cyan-400 font-semibold">
    Aarsh AI Technologies
  </span>, where I gained practical experience in developing full-stack web applications using React.js, Node.js, Express.js, and MongoDB.
</p>

            <p className="text-gray-300 leading-8 mt-5 text-lg">
              My goal is to become a skilled Full Stack Developer and contribute
              to innovative software solutions while continuously learning new
              technologies.
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-slate-800 rounded-xl p-8 shadow-lg border border-cyan-500">

              <div className="grid grid-cols-2 gap-6">

                <div>
                  <h4 className="text-cyan-400 font-semibold">
                    Name
                  </h4>
                  <p>Suraj Ojha</p>
                </div>

                <div>
                  <h4 className="text-cyan-400 font-semibold">
                    Education
                  </h4>
                  <p>B.Tech (CSE)</p>
                </div>

               <div>
  <h4 className="text-cyan-400 font-semibold">
    Experience
  </h4>
  <p>Frontend Developer & MERN Stack Intern</p>
</div>

<div>
  <h4 className="text-cyan-400 font-semibold">
    Companies
  </h4>
  <p>Vaishnav Technologies & Aarsh AI Technologies</p>
</div>

                <div>
                  <h4 className="text-cyan-400 font-semibold">
                    Skills
                  </h4>
                  <p>React, Node.js, Express, MongoDB</p>
                </div>

                <div>
                  <h4 className="text-cyan-400 font-semibold">
                    Location
                  </h4>
                  <p>India</p>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;