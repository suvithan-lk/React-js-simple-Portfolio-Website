import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact bg-gray-900 text-white py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-400">
            Let’s connect! Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-96">
            <iframe
              title="My Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63316.29543136309!2d80.0049799!3d9.6614986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe548f6c27f3f3%3A0x1234567890abcdef!2sJaffna!5e0!3m2!1sen!2slk!4v1692947399837!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="map-frame"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
