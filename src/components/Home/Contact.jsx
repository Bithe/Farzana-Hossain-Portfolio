
const Contact = () => {
    return (
        <div>
              <section id="contact" className="py-8 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Contact Information
          </h2>
          <p className="text-center text-gray-600 mb-4">
            Email: your.email@example.com
          </p>
          <p className="text-center text-gray-600 mb-4">
            LinkedIn:{" "}
            <a href="your-linkedin-profile" className="text-blue-500">
              Your LinkedIn
            </a>
          </p>
          <p className="text-center text-gray-600 mb-4">
            GitHub:{" "}
            <a href="your-github-profile" className="text-blue-500">
              Your GitHub
            </a>
          </p>
          <div className="flex justify-center">
            <form className="bg-white p-6 rounded shadow-md w-full max-w-lg">
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded"
                ></input>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded"
                ></input>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-2 border border-gray-300 rounded"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Contact;