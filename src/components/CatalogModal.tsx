import { X, Download, ExternalLink } from 'lucide-react';

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CatalogModal({ isOpen, onClose }: CatalogModalProps) {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/catalog.pdf';
    link.download = 'PS_Gallery_Catalog.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewInNewTab = () => {
    window.open('/catalog.pdf', '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full max-h-[90vh] overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-amber-500 text-white rounded-full p-2">
              <ExternalLink className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Frame Catalog</h2>
              <p className="text-gray-600">Complete collection of our photo frames</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="p-6">
          <div className="bg-gray-50 rounded-xl p-4 mb-4 shadow-inner">
            <iframe
              src="/catalog.pdf"
              className="w-full h-[500px] rounded-lg"
              title="PS Gallery Frame Catalog"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleDownload}
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition-colors transform hover:scale-105 duration-200"
            >
              <Download className="h-5 w-5" />
              <span>Download Catalogue</span>
            </button>
            <button
              onClick={handleViewInNewTab}
              className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-amber-500 text-amber-500 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-colors transform hover:scale-105 duration-200"
            >
              <ExternalLink className="h-5 w-5" />
              <span>Open in New Tab</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-4 text-center">
          <p className="text-gray-600 text-sm">
            Need help choosing the right frame? Contact us at{' '}
            <a href="tel:+919600295627" className="text-amber-500 hover:underline font-semibold">
              +91-9600295627
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}


