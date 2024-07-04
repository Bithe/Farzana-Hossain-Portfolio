const Skills = () => {
  return (
    <div id="skills">
      <section id="skills" className="py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Technical Skills
          </h2>
          <div className="flex flex-wrap justify-center">
            <span className="text-blue-800 px-4 py-2 m-2 rounded">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                className="w-12 h-12 mx-4 mx-4 inline-block"
              />
              JavaScript
            </span>
            <span className="text-blue-800 px-4 py-2 m-2 rounded">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
                alt="MongoDB"
                className="w-12 h-12 mx-4 inline-block"
              />
              MongoDB
            </span>
            <span className="text-blue-800 px-4 py-2 m-2 rounded">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                alt="Express"
                className="w-12 h-12 mx-4 inline-block"
              />
              Express
            </span>
            <span className="text-blue-800 px-4 py-2 m-2 rounded">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML"
                className="w-12 h-12 mx-4 inline-block"
              />
              HTML
            </span>
            <span className="text-blue-800 px-4 py-2 m-2 rounded">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                alt="CSS"
                className="w-12 h-12 mx-4 inline-block"
              />
              CSS
            </span>
            <span className="text-blue-800 px-4 py-2 m-2 rounded">
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="Tailwind CSS"
                className="w-12 h-12 mx-4 inline-block"
              />
              Tailwind CSS
            </span>
            <span className="text-blue-800 px-4 py-2 m-2 rounded">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="React"
                className="w-12 h-12 mx-4 inline-block"
              />
              React
            </span>
            <span className="text-blue-800 px-4 py-2 m-2 rounded">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="Node.js"
                className="w-12 h-12 mx-4 inline-block"
              />
              Node.js
            </span>
            <span className="text-blue-800 px-4 py-2 m-2 rounded">
              <img
                src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                alt="Firebase"
                className="w-12 h-12 mx-4 inline-block"
              />
              Firebase
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
