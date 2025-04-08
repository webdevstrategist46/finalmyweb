"use client";
import React from "react";



export default function Index() {
  return (function MainComponent({ onDownload }) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [downloading, setDownloading] = React.useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const generateStaticFiles = () => {
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WriteWeb Media</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body class="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] text-white">
    <!-- Navigation -->
    <nav class="px-6 py-8">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <a href="/" class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500">
                ✍️ WriteWeb Media
            </a>
            <div class="hidden md:flex space-x-8">
                <a href="/services" class="nav-link text-gray-300 hover:text-white">Services</a>
                <a href="/portfolio" class="nav-link text-gray-300 hover:text-white">Portfolio</a>
                <a href="/about" class="nav-link text-gray-300 hover:text-white">About</a>
                <a href="/contact" class="nav-link text-gray-300 hover:text-white">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="px-4 pt-20">
        <!-- Your existing content structure -->
    </main>

    <script src="script.js"></script>
</body>
</html>`;

    const cssContent = `
/* Animations and styles */
@keyframes shooting {
    0% {
        transform: translateX(0) translateY(0) rotate(45deg);
        opacity: 1;
    }
    100% {
        transform: translateX(1000px) translateY(1000px) rotate(45deg);
        opacity: 0;
    }
}

.shooting-star {
    position: absolute;
    background: linear-gradient(45deg, rgba(255,255,255,1), rgba(255,255,255,0));
    border-radius: 50%;
    animation: shooting linear infinite;
    opacity: 0;
    filter: blur(1px);
}

/* Add all your existing animations and styles */
`;

    const jsContent = `
// Interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Form handling
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            // Form submission logic
        });
    }

    // Animation initialization
    initializeAnimations();
});

function initializeAnimations() {
    // Add your animation initialization code
}
`;

    // Create Blob objects for each file
    const htmlBlob = new Blob([htmlContent], { type: 'text/html' });
    const cssBlob = new Blob([cssContent], { type: 'text/css' });
    const jsBlob = new Blob([jsContent], { type: 'text/javascript' });

    // Create download links
    const htmlUrl = URL.createObjectURL(htmlBlob);
    const cssUrl = URL.createObjectURL(cssBlob);
    const jsUrl = URL.createObjectURL(jsBlob);

    return { htmlUrl, cssUrl, jsUrl };
  };

  const handleDownload = () => {
    setDownloading(true);
    const files = generateStaticFiles();

    // Create download links
    const downloadFile = (url, filename) => {
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };

    // Download each file
    downloadFile(files.htmlUrl, 'index.html');
    downloadFile(files.cssUrl, 'styles.css');
    downloadFile(files.jsUrl, 'script.js');

    setDownloading(false);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] text-white ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-800">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500 mb-6">
            Download Static Website Files
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800/30 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">📦 Package Contents</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">📄</span>
                  index.html - Main HTML structure
                </li>
                <li className="flex items-center">
                  <span className="text-teal-400 mr-2">🎨</span>
                  styles.css - Animations and styling
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-2">⚡</span>
                  script.js - Interactive features
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/30 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">🚀 Features Included</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Modern animations and transitions</li>
                <li>✓ Responsive design</li>
                <li>✓ Contact form functionality</li>
                <li>✓ Interactive UI elements</li>
              </ul>
            </div>

            <button
              onClick={handleDownload}
              disabled={downloading}
              className="w-full glow-button px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-white transform transition-all duration-300 hover:from-blue-700 hover:to-teal-700 disabled:opacity-50"
            >
              {downloading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating Files...
                </span>
              ) : (
                "Download Website Files"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StoryComponent() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Static Website Files Generator</h2>
      <MainComponent />
    </div>
  );
});
}