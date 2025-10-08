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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-primaryBg rounded-2xl shadow-bronze max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-borderLine">
          <div className="flex items-center space-x-3">
            <div className="bg-accentGold text-primaryText rounded-full p-2">
              <ExternalLink className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primaryText">Frame Catalog</h2>
              <p className="text-secondaryText">Complete collection of our photo frames</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-borderLine rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-primaryText" />
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="p-6">
          <div className="bg-borderLine rounded-xl p-4 mb-4">
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
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-accentGold text-primaryText rounded-full font-semibold hover:bg-accentGold/90 transition-colors"
            >
              <Download className="h-5 w-5" />
              <span>Download Catalog</span>
            </button>
            <button
              onClick={handleViewInNewTab}
              className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-accentGold text-accentGold rounded-full font-semibold hover:bg-accentGold hover:text-primaryText transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
              <span>Open in New Tab</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-primaryText/5 p-4 text-center">
          <p className="text-secondaryText text-sm">
            Need help choosing the right frame? Contact us at{' '}
            <a href="tel:+919876543210" className="text-accentGold hover:underline">
              +91-9876543210
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}


