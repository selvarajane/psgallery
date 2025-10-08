import { useState } from 'react';
import { X, Mail, Lock, User, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setEmail('');
      setPassword('');
      setTimeout(onClose, 500);
    }, 2000);
  };

  const handleGoogleLogin = async () => {
    if (!supabase) {
      alert('Auth not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY');
      return;
    }
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
      if (error) throw error;
    } catch (err) {
      console.error(err);
      alert('Google sign-in failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-slideInRight">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600"></div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full mb-4">
              <User className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">
              Welcome Back
            </h2>
            <p className="text-gray-600 mt-2">Login to your PS Gallery account</p>
          </div>

          {showSuccess && (
            <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-xl flex items-center space-x-3 animate-slideDown">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              <p className="text-green-700 font-semibold">Login successful!</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition-all duration-300"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-pink-600 hover:text-pink-700 font-semibold">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="text-pink-600 hover:text-pink-700 font-semibold">
                Sign Up
              </a>
            </p>
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full py-3 border-2 border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition"
            >
              {loading ? 'Continuing…' : 'Continue with Google'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
