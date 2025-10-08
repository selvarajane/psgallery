import { ShoppingCart, Truck } from 'lucide-react';
import { products, Product } from '../data/mockData';

interface ProductsProps {
  onOrderClick: (product: Product) => void;
}

export default function Products({ onOrderClick }: ProductsProps) {
  return (
    <div className="min-h-screen section-bg py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-5xl font-bold text-primaryText mb-4">
            Our Photo Frames Collection
          </h1>
          <p className="text-xl text-secondaryText">Choose from 30 different sizes to perfectly frame your memories</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group card-surface rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-beige hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-3"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-accentGold text-primaryText px-3 py-1 rounded-full font-bold text-sm shadow-lg transform translate-x-20 group-hover:translate-x-0 transition-transform duration-500">
                  {product.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-primaryText mb-2 transition-all duration-300">
                  {product.name}
                </h3>
                <p className="text-secondaryText text-sm mb-4 line-clamp-2">{product.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold text-primaryText">
                      ₹{product.price}
                    </span>
                    <div className="flex items-center text-sm font-bold text-primaryText mt-1">
                      <Truck className="h-4 w-4 mr-1" />
                      <span>+ Courier Charge</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOrderClick(product)}
                  className="w-full py-3 btn-primary rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group-hover:animate-pulse"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Order Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
