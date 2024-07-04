import survey from "../../assets/images/survey.gif";
import apsgif from "../../assets/images/apsgif.webp";
import art from "../../assets/images/art.gif";
const Projects = () => {
  return (
    <div>
      <section id="projects" className="py-8 bg-gray-200">
        {/* <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-2xl font-bold mb-2">Project Name</h3>
              <p className="text-gray-600 mb-2">
                Project Description: A brief description of the project.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-2">
                <li>Core Feature 1</li>
                <li>Core Feature 2</li>
                <li>Core Feature 3</li>
              </ul>
              <p className="text-gray-600 mb-2">
                Used Technologies: Technology 1, Technology 2
              </p>
              <a href="live/project/link" className="text-blue-500">
                Live Project
              </a>{" "}
              |{" "}
              <a href="github/repository/link" className="text-blue-500">
                GitHub Code
              </a>
            </div>
          </div>
        </div> */}

        <section id="portfolio" className="portfolio-section py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Projects Showcase</h2>
              <p className="text-lg text-indigo-500 font-semibold">
                Discover My latest projects
              </p>
            </div>
            {/* <div className="flex flex-col md:flex-row items-center mb-8">
              <button className="filter-button bg-indigo-500 hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded">
                All
              </button>
              <button className="filter-button bg-indigo-500 hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded">
                Web Design
              </button>
              <button className="filter-button bg-indigo-500 hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded">
                App Development
              </button>
              <button className="filter-button bg-indigo-500 hover:bg-pink-500 px-4 py-2 mr-2 mb-2 text-white rounded">
                Branding
              </button>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* PROJECT 1 START----------------------- */}
              <div className="group portfolio-item  hover:shadow-lg shadow-md rounded-lg overflow-hidden">
                <a
                  href="https://zendesk-survey-client.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative"
                >
                  <img
                    className="w-full h-60 object-cover"
                    src={survey}
                    alt="Zendesk Survey App"
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                  <div className="p-4 flex flex-col items-center justify-between relative z-10">
                    <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                      Project 1
                    </h3>
                    <span className="text-sm font-bold text-pink-500 group-hover:text-indigo-500">
                      Survey App
                    </span>
                  </div>
                </a>

                <div className="container mx-auto">
                  <div className="p-4 rounded shadow-md">
                    <h3 className="text-2xl font-bold mb-2">Zendesk</h3>
                    <p className="text-gray-600 mb-2">
                      Project Description: SurveyMaster is a comprehensive
                      survey management platform with features for creating,
                      participating in, and managing surveys, including user
                      authentication and role-based dashboards. Email/password account creation. Default role for new users is user.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-2">
                      <li>
                        A user can see the latest surveys on the home page and
                        Dashboard for every user - admin, user, surveyor,
                        pro-user. 📄🌟
                      </li>
                      <li>Firebase authentication.</li>
                      <li>Payment Gateway to become a pro-user.</li>
                    </ul>
                    <p className="text-gray-600 mb-2">
                      Used Technologies: React.js, Tailwind CSS, Node.js,
                      Express.js, MongoDB, JWT (JSON Web Tokens) , React Query.
                    </p>
                    <a
                      href="https://zendesk-survey-client.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md:font-bold text-blue-500 hover:text-slate-950 hover:font-extrabold"
                    >
                      Live Project
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/Bithe/b9a12-client-side-Bithe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md:font-bold text-blue-500 hover:text-slate-950 hover:font-extrabold"
                    >
                      {" "}
                      GitHub Code
                    </a>
                  </div>
                </div>
              </div>
              {/* PROJECT 1 END ------------------------------------- */}

              {/* PROJECT 2 START----------------------- */}
              <div className="group portfolio-item  hover:shadow-lg shadow-md rounded-lg overflow-hidden">
                <a
                  href="https://zendesk-survey-client.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative"
                >
                  <img
                    className="w-full h-60 object-cover"
                    src={apsgif}
                    alt="Zendesk Survey App"
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                  <div className="p-4 flex flex-col items-center justify-between relative z-10">
                    <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                      Project 2
                    </h3>
                    <span className="text-sm font-bold text-pink-500 group-hover:text-indigo-500">
                      Alternative Product Information System{" "}
                    </span>
                  </div>
                </a>

                <div className="container mx-auto">
                  <div className="p-4 rounded shadow-md">
                    <h3 className="text-2xl font-bold mb-2">ProdSwap</h3>
                    <p className="text-gray-600 mb-2">
                      Project Description: The ProdSwap Alternative Product
                      Information System (APIS) is a web-based platform designed
                      to provide users with information and recommendations
                      about various products. Whether you're searching for
                      alternatives, seeking recommendations, or sharing your
                      experiences.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-2">
                      <li>
                        Only the owner of a query, recommendation, or comment
                        can modify or delete it. 📄🌟
                      </li>
                      <li>Firebase authentication.</li>
                      <li>
                        Access and use the system seamlessly on various devices.
                      </li>
                    </ul>
                    <p className="text-gray-600 mb-2">
                      Used Technologies: React.js, Tailwind CSS, Node.js,
                      Express.js, MongoDB, JWT (JSON Web Tokens) , React Query.
                    </p>
                    <a
                      href="https://prodswap-hub.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md:font-bold text-blue-500 hover:text-slate-950 hover:font-extrabold"
                    >
                      Live Project
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/Bithe/b9a11-client-side-Bithe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md:font-bold text-blue-500 hover:text-slate-950 hover:font-extrabold"
                    >
                      {" "}
                      GitHub Code
                    </a>
                  </div>
                </div>
              </div>
              {/* PROJECT 2 END ------------------------------------- */}

              {/* PROJECT 3 START----------------------- */}
              <div className="group portfolio-item  hover:shadow-lg shadow-md rounded-lg overflow-hidden">
                <a
                  href="https://zendesk-survey-client.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative"
                >
                  <img
                    className="w-full h-60 object-cover"
                    src={art}
                    alt="Zendesk Survey App"
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                  <div className="p-4 flex flex-col items-center justify-between relative z-10">
                    <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                      Project 1
                    </h3>
                    <span className="text-sm font-bold text-pink-500 group-hover:text-indigo-500">
                      Art & Craft Store{" "}
                    </span>
                  </div>
                </a>

                <div className="container mx-auto">
                  <div className="p-4 rounded shadow-md">
                    <h3 className="text-2xl font-bold mb-2">ArtScape</h3>
                    <p className="text-gray-600 mb-2">
                      Project Description: ArtScape is your ultimate destination for exploring the mesmerizing world of Painting and Drawing. Immerse yourself in a diverse array of artistic creations, from landscapes to portraits, watercolors to oil paintings, and much more.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-2">
                      <li>
                      Dive into the enchanting realm of art with our captivating homepage.
                      📄🌟
                      </li>
                      <li>Firebase authentication.</li>
                      <li>Showcase your creations and track your favorites in your personalized list, with categories like Landscape Painting, Portrait Drawing, Watercolour Painting, Oil Painting, and Charcoal Sketching.</li>
                    </ul>
                    <p className="text-gray-600 mb-2">
                      Used Technologies: React.js, Tailwind CSS, Node.js,
                      Express.js, MongoDB, React Query.
                    </p>
                    <a
                      href="https://art-scape-client.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md:font-bold text-blue-500 hover:text-slate-950 hover:font-extrabold"
                    >
                      Live Project
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/Bithe/B9A10-client-side-Bithe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md:font-bold text-blue-500 hover:text-slate-950 hover:font-extrabold"
                    >
                      {" "}
                      GitHub Code
                    </a>
                  </div>
                </div>
              </div>
              {/* PROJECT 3 END ------------------------------------- */}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Projects;
