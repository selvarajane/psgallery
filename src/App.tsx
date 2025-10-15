import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import LoginModal from './components/LoginModal';
import OrderModal from './components/OrderModal';
import { Product } from './data/mockData';
import { useEffect } from 'react';
import { supabase } from './lib/supabaseClient';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [user, setUser] = useState<any>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOrderClick = (product: Product) => {
    setSelectedProduct(product);
    setIsOrderModalOpen(true);
  };

  useEffect(() => {
    const init = async () => {
      if (!supabase) return;
      const { data } = await supabase.auth.getUser();
      setUser(data.user ?? null);
    };
    init();
    if (!supabase) return;
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) setIsLoginModalOpen(false);
    });
    return () => {
      sub?.subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onLoginClick={() => setIsLoginModalOpen(true)}
        user={user}
      />
      <div className="snap-y snap-mandatory">
        <div id="home" className="snap-start">
          <Home onNavigate={handleNavigate} user={user} />
        </div>
        <div id="products" className="snap-start">
          <Products onOrderClick={handleOrderClick} />
        </div>
        <div id="about" className="snap-start">
          <About />
        </div>
        <div id="contact" className="snap-start">
          <Contact />
        </div>
      </div>
      <footer className="text-center text-sm text-secondaryText py-6">
        Created by _SR Developer.
      </footer>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
}

export default App;
