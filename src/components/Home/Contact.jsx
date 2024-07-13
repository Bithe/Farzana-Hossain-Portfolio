import  { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'Farzana.hossain'
    ).then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.log(error.text);
      alert('An error occurred, please try again.');
    });
  };

  return (
    <div id="contact">
      <section id="contact" className="py-8 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Contact Information
          </h2>
          <p className="text-center">
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I'd love to hear from you.
          </p>
          <p className="text-center text-gray-600 mb-4">
            Email: Farzana.hossain147@gmail.com
          </p>

          <div className="flex space-x-2 justify-center items-center mb-4">
            <a
              href="https://www.linkedin.com/in/farzana-hossain-769518269/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              <img
                className="h-8 w-8"
                src="https://img.icons8.com/doodle/40/000000/linkedin-circled.png"
                alt="LinkedIn"
              />
            </a>

            <a
              href="https://github.com/Bithe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              <img
                className="h-8 w-8"
                src="https://img.icons8.com/doodle/40/000000/github--v1.png"
                alt="GitHub"
              />
            </a>
          </div>

          <div className="flex justify-center">
            <form className="bg-white p-6 rounded shadow-md w-full max-w-lg" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
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
