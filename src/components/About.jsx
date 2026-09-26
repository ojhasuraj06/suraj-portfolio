import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-16 sm:py-20 lg:py-24"
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
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3
              className="
                text-2xl
                sm:text-3xl
                font-bold
                mb-5
                sm:mb-6
              "
            >
              MERN Stack Developer
            </h3>

            <p
              className="
                text-gray-300
                leading-7
                sm:leading-8
                text-base
                sm:text-lg
              "
            >
              Hello! I'm{" "}
              <span className="text-cyan-400 font-semibold">
                Suraj Ojha
              </span>
              , a passionate MERN Stack Developer with hands-on experience in
              building responsive, scalable, and user-friendly web
              applications. I enjoy creating modern websites using React.js,
              Node.js, Express.js, and MongoDB.
            </p>

            <p
              className="
                text-gray-300
                leading-7
                sm:leading-8
                mt-5
                text-base
                sm:text-lg
              "
            >
              I have completed a{" "}
              <span className="text-cyan-400 font-semibold">
                Frontend Development Internship
              </span>{" "}
              at{" "}
              <span className="text-cyan-400 font-semibold">
                Vaishnav Technologies
              </span>
              , where I worked on real-world projects and enhanced my frontend
              development skills.
            </p>

            <p
              className="
                text-gray-300
                leading-7
                sm:leading-8
                mt-5
                text-base
                sm:text-lg
              "
            >
              I also completed a{" "}
              <span className="text-cyan-400 font-semibold">
                MERN Stack Development Internship
              </span>{" "}
              at{" "}
              <span className="text-cyan-400 font-semibold">
                Aarsh AI Technologies
              </span>
              , where I gained practical experience in developing full-stack
              web applications using React.js, Node.js, Express.js, and
              MongoDB.
            </p>

            <p
              className="
                text-gray-300
                leading-7
                sm:leading-8
                mt-5
                text-base
                sm:text-lg
              "
            >
              My goal is to become a skilled Full Stack Developer and
              contribute to innovative software solutions while continuously
              learning new technologies.
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              className="
                bg-slate-800
                rounded-xl
                sm:rounded-2xl
                p-5
                sm:p-6
                lg:p-8
                shadow-lg
                border
                border-cyan-500
                hover:shadow-cyan-500/20
                transition
                duration-300
              "
            >

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-5
                  sm:gap-6
                "
              >

                {/* Name */}
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-1">
                    Name
                  </h4>
                  <p className="text-gray-200">
                    Suraj Ojha
                  </p>
                </div>

                {/* Education */}
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-1">
                    Education
                  </h4>
                  <p className="text-gray-200">
                    B.Tech (CSE)
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-1">
                    Experience
                  </h4>
                  <p className="text-gray-200 leading-6">
                    Frontend Developer & MERN Stack Intern
                  </p>
                </div>

                {/* Companies */}
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-1">
                    Companies
                  </h4>
                  <p className="text-gray-200 leading-6">
                    Vaishnav Technologies & Aarsh AI Technologies
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-1">
                    Skills
                  </h4>
                  <p className="text-gray-200 leading-6">
                    React, Node.js, Express, MongoDB
                  </p>
                </div>

                {/* Location */}
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-1">
                    Location
                  </h4>
                  <p className="text-gray-200">
                    India
                  </p>
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