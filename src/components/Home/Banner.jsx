import profile from '../../assets/images/profile.webp'

const Banner = () => {
  return (
    <div>
      <header className="bg-white p-8 shadow-md">
        {/*  */}
        <section className="py-8 z-10 font-serif">
          <div className="flex flex-col md:flex-row items-center max-w-6xl px-2 py-2 mx-auto">
            <div className="w-full md:w-3/4 py-4">
              <h1 className="text-purple-900 text-6xl pb-8 font-semibold leading-none tracking-tighter">
                Hi! I&apos;m Farzana Hossain <br />
                <span className="text-blue-500 ">
                  <div className="w-max">
                    <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-8 text-3xl md:text-5xl font-bold">
                    I am Web Developer
                    </h1>
                  </div>
                </span>{" "}
              </h1>
              <div className="flex space-x-2 mb-4">
            <a
              href="https://www.linkedin.com/in/farzana-hossain-769518269/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              <img
                className="h-8 w-8 "
                src="https://img.icons8.com/doodle/40/000000/instagram-new--v2.png"
              ></img>
            </a>

            <a
              href="https://github.com/Bithe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              <img
                className="h-8 w-8 "
                src="https://img.icons8.com/doodle/40/000000/github--v1.png"
              ></img>{" "}
            </a>
          </div>

              <a
                href="https://drive.google.com/uc?export=download&id=1FfkOGlEmzBE4B9jtuMM7u6GcHc0a80yW"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Download Resume
              </a>
            </div>
            <div className="w-full md:w-2/4 py-8">
              <img
                // src="https://www.svgrepo.com/show/493509/person-who-invests.svg"
                src={profile}
                className="g-image"
                alt="Illustration"
              />
            </div>
          </div>
        </section>

 
      </header>
    </div>
  );
};

export default Banner;
