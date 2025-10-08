import { Star, Users, Award, TrendingUp, FileText, MessageCircle } from 'lucide-react';
import { reviews, shopStats } from '../data/mockData';
import { useState, useEffect } from 'react';
import CatalogModal from './CatalogModal';

interface HomeProps {
  onNavigate: (page: string) => void;
  user?: any;
}

export default function Home({ onNavigate, user }: HomeProps) {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="min-h-screen section-bg">
      <div
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: user?.user_metadata?.picture
            ? `url(${user.user_metadata.picture})`
            : `url(/home.jpg), url(https://images.pexels.com/photos/1090641/pexels-photo-1090641.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primaryText/70 via-primaryText/30 to-transparent"></div>
        <div className="relative text-center text-primaryBg px-4 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slideUp">
            Welcome to PS Gallery
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            Frame Your Precious Memories in Style
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button
              onClick={() => onNavigate('products')}
              className="px-8 py-4 btn-primary rounded-full shadow-bronze hover:scale-110 transition-all duration-300 animate-bounce"
            >
              Explore Our Collection
            </button>
            <div className="mt-4 text-primaryBg/90 text-sm sm:ml-4 flex items-center gap-2 bg-primaryText/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <MessageCircle className="h-4 w-4" />
              <span>Click Order, enter details, then send your photo on WhatsApp to customize</span>
            </div>
          </div>
        </div>

        {/* Sticky Catalog Button - Bottom Right Corner */}
        <div 
          className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
            isScrolling ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
          }`}
        >
          <button
            onClick={() => setIsCatalogOpen(true)}
            className="group relative bg-gradient-to-r from-accentGold via-yellow-400 to-orange-500 text-primaryText font-bold text-lg px-6 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 animate-pulse border-4 border-white/20 backdrop-blur-sm"
            style={{
              background: 'linear-gradient(135deg, #FFD700, #FFA500, #FF6B35, #FF8C42)',
              boxShadow: '0 20px 40px rgba(255, 215, 0, 0.4), 0 0 60px rgba(255, 165, 0, 0.3)',
            }}
          >
            <div className="flex flex-col items-center space-y-1">
              <FileText className="h-6 w-6 animate-bounce" />
              <span className="text-sm font-black">CATALOG</span>
            </div>
            
            {/* Glowing effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accentGold/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Sparkle effects */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card-surface p-8 rounded-2xl transform hover:scale-105 transition-all duration-300">
            <Users className="h-16 w-16 mb-4 animate-pulse" />
            <h3 className="text-4xl font-bold mb-2">{shopStats.totalCustomers.toLocaleString()}+</h3>
            <p className="text-secondaryText">Happy Customers</p>
          </div>

          <div className="card-surface p-8 rounded-2xl transform hover:scale-105 transition-all duration-300">
            <Star className="h-16 w-16 mb-4 animate-pulse" />
            <h3 className="text-4xl font-bold mb-2">{shopStats.averageRating} / 5.0</h3>
            <p className="text-secondaryText">Average Rating</p>
          </div>

          <div className="card-surface p-8 rounded-2xl transform hover:scale-105 transition-all duration-300">
            <Award className="h-16 w-16 mb-4 animate-pulse" />
            <h3 className="text-4xl font-bold mb-2">30+</h3>
            <p className="text-secondaryText">Frame Sizes Available</p>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <TrendingUp className="h-8 w-8 text-accentGold mr-3" />
            <h2 className="text-4xl font-bold text-primaryText">
              Customer Reviews
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="card-surface p-6 rounded-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-accentGold text-primaryText rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg">
                    {review.customerName.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-primaryText">{review.customerName}</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < review.rating ? 'text-accentGold fill-accentGold' : 'text-borderLine'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-secondaryText italic">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primaryText rounded-3xl p-12 text-center text-primaryBg shadow-bronze">
          <h2 className="text-4xl font-bold mb-4">Ready to Frame Your Memories?</h2>
          <p className="text-xl mb-8">Browse our collection of 30+ frame sizes</p>
          <button onClick={() => onNavigate('products')} className="px-8 py-4 btn-primary rounded-full">
            Shop Now
          </button>
        </div>
      </div>

      {/* Catalog Modal */}
      <CatalogModal 
        isOpen={isCatalogOpen} 
        onClose={() => setIsCatalogOpen(false)} 
      />
    </div>
  );
}
