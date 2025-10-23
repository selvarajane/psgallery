import { useState } from 'react';
import { X, ShoppingCart, MessageCircle, User, Phone, MapPin } from 'lucide-react';
import { Product } from '../data/mockData';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function OrderModal({ isOpen, onClose, product }: OrderModalProps) {
  const WHATSAPP_NUMBER = '917448641788'; // target recipient
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [quantity, setQuantity] = useState(1);
  // removed image upload feature per request

  if (!isOpen || !product) return null;

  // no file handling

  const handleWhatsAppOrder = async () => {
    const message = `Hi PS Gallery! I want to order:

*Product:* ${product.name}
*Price:* ₹${product.price}
*Quantity:* ${quantity}
*Total:* ₹${product.price * quantity}

*Customer Details:*
Name: ${name}
Phone: ${phone}
Address: ${address}

Please confirm my order. Thank you!`;

    // Try Web Share API with files on supported mobile browsers (WhatsApp available via share sheet)
    try {
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } catch (err) {
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }

    // Reset and close
    setName('');
    setPhone('');
    setAddress('');
    setQuantity(1);
    onClose();
  };
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden animate-slideUp max-h-[90vh] overflow-y-auto">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600"></div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10 bg-white rounded-full p-1"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full mb-4">
              <ShoppingCart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">
              Order Details
            </h2>
            <p className="text-gray-600 mt-2">Complete your order information</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full md:w-48 h-48 object-cover rounded-xl shadow-lg"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">
                    ₹{product.price}
                  </span>
                  <div className="flex items-center space-x-3">
                    <label className="text-gray-700 font-semibold">Qty:</label>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value === '') {
                          setQuantity(1);
                          e.target.value = '';
                        } else {
                          const parsedValue = parseInt(value);
                          setQuantity(Math.max(1, parsedValue || 1));
                        }
                      }}
                      onFocus={(e) => e.target.value = ''}
                      className="w-20 px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-pink-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t-2 border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-700">Total:</span>
                    <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">
                      ₹{product.price * quantity}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition-all duration-300"
                  placeholder="+91 1234567890"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Delivery Address</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  rows={3}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition-all duration-300"
                  placeholder="Enter your complete delivery address"
                ></textarea>
              </div>
            </div>

            <button
              type="button"
              onClick={handleWhatsAppOrder}
              disabled={!name || !phone || !address}
              className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Send Order via WhatsApp</span>
            </button>
          </form>

          <div className="mt-6 p-4 bg-green-50 rounded-xl border-2 border-green-200">
            <p className="text-sm text-gray-600 text-center">
              Clicking the button will open WhatsApp with your order details pre-filled.
              Our team will confirm your order shortly!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
