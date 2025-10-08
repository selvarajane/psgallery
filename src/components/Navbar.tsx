import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onLoginClick: () => void;
  user?: any;
}

export default function Navbar({ currentPage, onNavigate, onLoginClick, user }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', value: 'home' },
    { name: 'Products', value: 'products' },
    { name: 'About', value: 'about' },
    { name: 'Contact', value: 'contact' }
  ];

  return (
    <nav className="navbar-bg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center space-x-3 cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => onNavigate('home')}
          >
            <img
              src="/logo1.jpg"
              alt="P & S Gallery"
              className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                img.src = '/logo.svg';
              }}
            />
            <span className="text-2xl font-bold text-primaryBg tracking-wider">P & S Gallery</span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`navbar-link font-medium ${currentPage === item.value ? '' : ''}`}
                aria-current={currentPage === item.value ? 'page' : undefined}
              >
                {item.name}
              </button>
            ))}
            {user ? (
              <img
                src={user.user_metadata?.avatar_url || user.user_metadata?.picture || '/logo1.jpg'}
                alt="Profile"
                className="ml-4 h-10 w-10 rounded-full object-cover border-2 border-primaryBg"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.src = '/logo.svg';
                }}
              />
            ) : (
              <button
                onClick={onLoginClick}
                className="ml-4 px-6 py-2 btn-primary"
              >
                Login
              </button>
            )}
          </div>

          <button
            className="md:hidden text-primaryBg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-primaryBg/95 backdrop-blur-sm animate-slideDown">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition-all text-secondaryText hover:text-primaryText`}
              >
                {item.name}
              </button>
            ))}
            {user ? (
              <div className="flex items-center px-4 py-2">
                <img
                  src={user.user_metadata?.avatar_url || user.user_metadata?.picture || '/logo1.jpg'}
                  alt="Profile"
                  className="h-10 w-10 rounded-full object-cover border-2 border-primaryBg mr-3"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.src = '/logo.svg';
                  }}
                />
                <span className="font-semibold text-primaryText truncate">
                  {user.user_metadata?.name || user.email}
                </span>
              </div>
            ) : (
              <button
                onClick={() => {
                  onLoginClick();
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 btn-primary font-semibold rounded-lg"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
