
const Contact = () => {
  return (
    <div className="bg-blackTwo">
      <div className="min-h-screen flex items-center justify-center p-6 py-40">
        <div className="max-w-4xl w-full border border-gray-100/20  rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-100">Contact Us</h2>
            <p className="text-gray-100/60 mt-2">
              We would love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-100"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-yellow focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-100"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-yellow focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-100"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Your message"
                  className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-yellow focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow hover:bg-megenta text-white font-bold py-2 px-4 rounded-md transition duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full">📍</div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-100">
                    Our Office
                  </h3>
                  <p className="text-gray-100/60">
                    The Studio. 7. Margery Hall Reigate Hill Reigate Surrey RH2
                    9RL
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full">📞</div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-100">Call Us</h3>
                  <p className="text-gray-100/60">+44 (0)1737-233890</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full">✉️</div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-100">
                    Email Us
                  </h3>
                  <p className="text-gray-100/60"> info@neopremia.co.uk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
