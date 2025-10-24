import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import OrderModal from './components/OrderModal';
import { Product } from './data/mockData';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderClick = (product: Product) => {
    setSelectedProduct(product);
    setIsOrderModalOpen(true);
  };


  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'products':
        return <Products onOrderClick={handleOrderClick} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      {renderPage()}
      <footer className="text-center text-sm text-secondaryText py-6">
        Created by _SR Developer.
      </footer>
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
}

export default App;
