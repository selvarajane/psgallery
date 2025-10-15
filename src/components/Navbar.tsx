interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onLoginClick: () => void;
  user?: any;
}

export default function Navbar({ onNavigate }: NavbarProps) {
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
          <div className="flex items-center">
            <button
              onClick={() => onNavigate('products')}
              className="px-4 py-2 rounded-lg text-black hover:text-amber-600 transition-colors duration-300"
            >
              Catalog
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}