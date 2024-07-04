
import cse from "../../assets/images/cse.png"
import cse1 from "../../assets/images/cse.webp"
import hsc from "../../assets/images/hsc.avif"

const Education = () => {
    return (
        <div>
            
      <section id="education" className="py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Educational Qualifications
          </h2>
          <p className="text-center text-gray-600">
          BSc in Computer Science and Engineering (CSE) - State University of Bangladesh
          </p>
          <p className="text-center text-gray-600">
          BSc in Computer Science and Engineering (CSE) - State University of Bangladesh
          </p>
          <p className="text-center text-gray-600">
          BSc in Computer Science and Engineering (CSE) - State University of Bangladesh
          </p>
        </div>
      </section>


      <div className="text-center p-8">
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
      Educational Qualifications
      </h2>

      <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <img
            src={cse1}
            alt="gem"
            className="inline-block rounded shadow-lg border border-merino-400"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
          BSc in Computer Science and Engineering (CSE)          </h3>
          <p className="sm:text-lg mt-6">
          State University of Bangladesh <br />
          Dhaka, Bangladesh
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <img
            src={hsc}
            alt="project members"
            className="inline-block rounded shadow-lg border border-merino-400"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
          Higher Secondary Certificate (HSC) : Science
          </h3>
          <p className="sm:text-lg mt-6">
          Dhaka Presidency College <br />
          Dhaka, Bangladesh

          </p>
        </div>
      </div>

    
    </div>
        </div>
    );
};

export default Education;