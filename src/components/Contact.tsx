import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">Get in touch with PS Gallery</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-orange-500 to-pink-500 text-white rounded-2xl p-6 mb-6">
              <MapPin className="h-12 w-12 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Visit Our Shop</h2>
              <p className="text-lg">
                PS Gallery Photo Frames<br />
                32/k, 3rd bypass Cross Street,<br />
                Tiruvannamalai, 606601
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 transition-all duration-300">
                <div className="bg-gradient-to-br from-pink-500 to-purple-500 text-white rounded-full p-3">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Phone</h3>
                  <a href="tel:+917448641788" className="text-pink-600 hover:text-pink-700 font-semibold">
                    +91 7448641788
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 transition-all duration-300">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full p-3">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">WhatsApp</h3>
                  <a
                    href="https://wa.me/917448641788"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-700 font-semibold"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 transition-all duration-300">
                <div className="bg-gradient-to-br from-orange-500 to-pink-500 text-white rounded-full p-3">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Email</h3>
                  <a href="mailto:psgallery@gmail.com" className="text-pink-600 hover:text-pink-700 font-semibold">
                    psgallery@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 transition-all duration-300">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-full p-3">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Business Hours</h3>
                  <p className="text-gray-600">Mon - Sat: 10:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Sunday: 11:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition-all duration-300"
                  placeholder="+91 1234567890"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition-all duration-300"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <MessageCircle className="h-16 w-16 mx-auto mb-4 animate-bounce" />
          <h2 className="text-4xl font-bold mb-4">Quick Order via WhatsApp</h2>
          <p className="text-xl mb-6">Get instant assistance and place your order directly on WhatsApp</p>
          <a
            href="https://wa.me/917448641788?text=Hi%20PS%20Gallery!%20I'm%20interested%20in%20ordering%20photo%20frames."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-pink-600 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
