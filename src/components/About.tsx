import { Heart, Award, Sparkles, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 mb-4">
            About PS Gallery
          </h1>
          <p className="text-xl text-gray-600">Your Trusted Partner in Preserving Memories</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12 animate-slideUp">
          <div className="md:flex">
            <div className="md:w-1/2 h-96">
              <img
                src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="PS Gallery"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-orange-50 to-pink-50">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                PS Gallery has been serving customers for over a decade, specializing in high-quality photo frames
                that turn your precious memories into beautiful wall art. We believe that every photo tells a story,
                and our mission is to help you showcase those stories in the most elegant way possible.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a wide range of 30+ frame sizes and styles, we cater to every need - from small personal photos
                to large wall-sized displays. Our commitment to quality craftsmanship and customer satisfaction has
                made us the preferred choice for thousands of happy customers.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-8 rounded-2xl shadow-xl text-white transform hover:scale-105 hover:rotate-2 transition-all duration-300 text-center">
            <Heart className="h-12 w-12 mb-4 mx-auto animate-pulse" />
            <h3 className="text-2xl font-bold mb-2">Quality First</h3>
            <p>Premium materials and expert craftsmanship in every frame</p>
          </div>

          <div className="bg-gradient-to-br from-pink-400 to-pink-600 p-8 rounded-2xl shadow-xl text-white transform hover:scale-105 hover:rotate-2 transition-all duration-300 text-center">
            <Award className="h-12 w-12 mb-4 mx-auto animate-pulse" />
            <h3 className="text-2xl font-bold mb-2">10+ Years</h3>
            <p>Serving customers with excellence and dedication</p>
          </div>

          <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-8 rounded-2xl shadow-xl text-white transform hover:scale-105 hover:rotate-2 transition-all duration-300 text-center">
            <Sparkles className="h-12 w-12 mb-4 mx-auto animate-pulse" />
            <h3 className="text-2xl font-bold mb-2">30+ Sizes</h3>
            <p>Wide variety of sizes to fit all your needs</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-400 to-orange-600 p-8 rounded-2xl shadow-xl text-white transform hover:scale-105 hover:rotate-2 transition-all duration-300 text-center">
            <Users className="h-12 w-12 mb-4 mx-auto animate-pulse" />
            <h3 className="text-2xl font-bold mb-2">1247+ Customers</h3>
            <p>Join our family of satisfied customers</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 mb-6 text-center">
            Why Choose PS Gallery?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-500 to-pink-500 text-white rounded-full p-3 flex-shrink-0">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Premium Quality</h3>
                <p className="text-gray-600">We use only the finest materials to ensure your frames last a lifetime.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 transition-all duration-300">
              <div className="bg-gradient-to-br from-pink-500 to-purple-500 text-white rounded-full p-3 flex-shrink-0">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Custom Solutions</h3>
                <p className="text-gray-600">Need a custom size? We create frames tailored to your specific needs.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full p-3 flex-shrink-0">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Customer Satisfaction</h3>
                <p className="text-gray-600">4.8/5 rating from over 1200 happy customers speaks for itself.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 transition-all duration-300">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-full p-3 flex-shrink-0">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Fast Service</h3>
                <p className="text-gray-600">Quick turnaround times with convenient WhatsApp ordering.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
