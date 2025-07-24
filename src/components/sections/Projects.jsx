import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Full-Stack Food Ordering Website</h3>
              <p className="text-gray-400 mb-4">
               A fully functional web application enabling users to discover restaurants, browse menus, and place food orders with ease. Developed with the MERN 
               stack for robust performance and a seamless, secure user experience.<br/>
                **Key Features:**<br/>
                - Secure user authentication with JWT for safe registration and login<br/>
                - Responsive and mobile-friendly UI using React.js, Tailwind CSS, and Bootstrap<br/>
                - Dynamic cart system to manage food items<br/>
                - RESTful APIs for restaurants, menu items, user accounts, and order processing<br/>
                - MongoDB integration for efficient data management<br/>
                - Version control and collaboration with Git/GitHub<br/>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MongoDB", "Express.js", "React.js", "Node.js","HTML5","Tailwind CSS", "JavaScript", "Bootstrap", "Git", "GitHub"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Srinu7652/subby_frontend"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">VeggieFresh E-commerce Frontend</h3>
              <p className="text-gray-400 mb-4">
                A modern web app for selling vegetables and fruits, featuring user authentication
                (customers and vendors), a dynamic shopping cart, and visually appealing design with
                React and Tailwind CSS.<br/>
                **Key Features:**  
                - Login for users and vendors  
                - Cart functionality  
                - Responsive and modular interface
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js","HTML5","Tailwind CSS", "JavaScript", "Bootstrap", "Git", "GitHub"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/srinu427452/GreenCart"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Jobby Web App</h3>
              <p className="text-gray-400 mb-4">
                A responsive web platform designed to help users search and apply for jobs efficiently. Built using HTML, React.js, Node.js, Express.js,
                and SQLite, it combines a sleek frontend with robust backend functionality.<br/>
                **Key Features**<br/>
                -Job Listings: Users can browse, search, and filter job opportunities.<br/>
                -User Authentication: Secure registration and login for both job seekers and employers.<br/>
                -Job Application System: Applicants can submit resumes and track application status.<br/>
                -Employer Dashboard: Employers can post, edit, and manage job listings.<br/>
                -Responsive Design: Fully functional and accessible on both desktop and mobile devices.<br/>
                Database Integration: Utilized SQLite for efficient data management.<br/>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "React.js", "Node.js", "Express.js", "SQLite"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/srinu427452/Jobby-app"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Plant-X - Responsive Plant-Based Landing Page</h3>
              <p className="text-gray-400 mb-4">
                Plant-X is a responsive landing page for a plant-based website, designed and built using HTML, CSS, and JavaScript.
                 This webpage is optimized for various devices and features an interactive navigation menu 
                 that changes color when scrolled or hovered over.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML","CSS","JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/srinu427452/PRODIGY_TrackCode_1"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
