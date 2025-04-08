"use client";
import React from "react";



export default function Index() {
  return (function MainComponent() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [downloading, setDownloading] = React.useState(false);
  const [downloadStatus, setDownloadStatus] = React.useState('');

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const generateStaticFiles = async () => {
    setDownloading(true);
    setDownloadStatus('Preparing files...');
    
    try {
      const response = await fetch('/api/generate-static-files', {
        method: 'POST'
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate files');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'website-files.zip';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      setDownloadStatus('Download complete!');
    } catch (error) {
      console.error('Error:', error);
      setDownloadStatus('Failed to generate files. Please try again.');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] text-white overflow-hidden ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
      <div className="fixed inset-0">
        <div className="code-grid"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500 mb-8 text-center slide-in-bottom">
          Download Website Files
        </h1>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 fade-in-up">
            <div className="space-y-6">
              <div className="text-gray-300 space-y-4">
                <h2 className="text-2xl font-semibold mb-4">Included Files:</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-400 mr-2">📄</span>
                    HTML files (index.html, about.html, services.html, etc.)
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-400 mr-2">🎨</span>
                    CSS files (styles.css with all animations)
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-400 mr-2">⚡</span>
                    JavaScript files (animations, form handling)
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">🖼️</span>
                    Assets (images, icons)
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Features:</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>✓ Responsive design</li>
                  <li>✓ Interactive animations</li>
                  <li>✓ Contact form functionality</li>
                  <li>✓ Optimized for performance</li>
                </ul>
              </div>

              <button
                onClick={generateStaticFiles}
                disabled={downloading}
                className="w-full glow-button px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-white transform transition-all duration-300 hover:from-blue-700 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {downloading ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-spin mr-2">⚡</span>
                    Generating Files...
                  </span>
                ) : (
                  "Download Website Files"
                )}
              </button>

              {downloadStatus && (
                <div className={`mt-4 p-4 rounded-lg text-center ${
                  downloadStatus.includes('complete') 
                    ? 'bg-green-500/20 text-green-300'
                    : downloadStatus.includes('Failed')
                      ? 'bg-red-500/20 text-red-300'
                      : 'bg-blue-500/20 text-blue-300'
                }`}>
                  {downloadStatus}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .code-grid {
          position: absolute;
          width: 200%;
          height: 200%;
          background-image: linear-gradient(rgba(96, 165, 250, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(96, 165, 250, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: moveGrid 20s linear infinite;
          transform: rotate(45deg);
          left: -50%;
          top: -50%;
        }

        @keyframes moveGrid {
          0% {
            transform: rotate(45deg) translateY(0);
          }
          100% {
            transform: rotate(45deg) translateY(-50px);
          }
        }

        .slide-in-bottom {
          animation: slideInBottom 0.8s ease-out forwards;
        }

        .fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
          animation-delay: 0.3s;
        }

        @keyframes slideInBottom {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .glow-button {
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
          position: relative;
          overflow: hidden;
        }

        .glow-button::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .glow-button:hover::after {
          opacity: 1;
        }

        .glow-button:hover {
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
        }
      `}</style>
    </div>
  );
}

function StoryComponent() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen p-8">
      <MainComponent />
    </div>
  );
});
}