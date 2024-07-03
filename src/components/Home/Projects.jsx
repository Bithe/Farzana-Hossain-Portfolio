import survey from "../../assets/images/survey.png";
const Projects = () => {
  return (
    <div>
      <section id="projects" className="py-8 bg-gray-200">
        <div className="container mx-auto">
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
        </div>

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
              <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
                <a href="/project-1">
                  <img
                    className="w-full h-60 object-cover"
                    src={survey}
                    alt="Project 1"
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
              </div>
              <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
                <a href="/project-2">
                  <img
                    className="w-full h-60 object-cover"
                    src="https://spacema-dev.com/elevate/assets/images/portfolio-2.png"
                    alt="Project 2"
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                  <div className="p-4 flex flex-col items-center justify-between relative z-10">
                    <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                      Awesome Project 2
                    </h3>
                    <span className="text-sm font-bold text-pink-500 group-hover:text-indigo-500">
                      Branding
                    </span>
                  </div>
                </a>
              </div>
              <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
                <a href="/project-3">
                  <img
                    className="w-full h-60 object-cover"
                    src="https://spacema-dev.com/elevate/assets/images/portfolio-3.png"
                    alt="Project 3"
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                  <div className="p-4 flex flex-col items-center justify-between relative z-10">
                    <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                      Awesome Project 3
                    </h3>
                    <span className="text-sm font-bold text-pink-500 group-hover:text-indigo-500">
                      Web Design, Branding
                    </span>
                  </div>
                </a>
              </div>
              <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
                <a href="/project-4">
                  <img
                    className="w-full h-60 object-cover"
                    src="https://spacema-dev.com/elevate/assets/images/portfolio-4.png"
                    alt="Project 4"
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                  <div className="p-4 flex flex-col items-center justify-between relative z-10">
                    <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                      Awesome Project 4
                    </h3>
                    <span className="text-sm font-bold text-pink-500 group-hover:text-indigo-500">
                      Web Design, Branding
                    </span>
                  </div>
                </a>
              </div>
              <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
                <a href="/project-5">
                  <img
                    className="w-full h-60 object-cover"
                    src="https://spacema-dev.com/elevate/assets/images/portfolio-5.png"
                    alt="Project 5"
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                  <div className="p-4 flex flex-col items-center justify-between relative z-10">
                    <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                      Awesome Project 5
                    </h3>
                    <span className="text-sm font-bold text-pink-500 group-hover:text-indigo-500">
                      Web Design, Branding
                    </span>
                  </div>
                </a>
              </div>
              <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
                <a href="/project-6">
                  <img
                    className="w-full h-60 object-cover"
                    src="https://spacema-dev.com/elevate/assets/images/portfolio-6.png"
                    alt="Project 6"
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                  <div className="p-4 flex flex-col items-center justify-between relative z-10">
                    <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                      Awesome Project 6
                    </h3>
                    <span className="text-sm font-bold text-pink-500 group-hover:text-indigo-500">
                      Web Design, Branding
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Projects;
