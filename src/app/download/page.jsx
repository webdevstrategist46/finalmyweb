"use client";
import React from "react";

function MainComponent() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [status, setStatus] = React.useState({
    message: "",
    type: "",
  });
  const [files, setFiles] = React.useState(null);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleGenerateFiles = async () => {
    setStatus({ message: "Generating files...", type: "" });

    try {
      const response = await fetch("/api/generate-static-files", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to generate files");
      }

      const data = await response.json();
      setFiles(data.files);
      setStatus({ message: "Files generated successfully!", type: "success" });
    } catch (error) {
      console.error("Error:", error);
      setStatus({
        message: "Failed to generate files. Please try again.",
        type: "error",
      });
    }
  };

  const downloadFile = (fileName, content) => {
    const blob = new Blob([content], {
      type: fileName.endsWith(".css")
        ? "text/css"
        : fileName.endsWith(".js")
        ? "text/javascript"
        : "text/html",
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] text-white overflow-hidden ${
        isLoaded ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000`}
    >
      <div className="fixed inset-0">
        <div className="code-grid"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500 mb-8 text-center slide-in-bottom">
          Download Website Files
        </h1>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 fade-in-up">
            <div className="text-center mb-8">
              <p className="text-gray-300 mb-6">
                Generate and download your website files. You'll receive three
                files:
                <br />
                <code className="text-blue-400">index.html</code> - The main
                HTML structure
                <br />
                <code className="text-blue-400">style.css</code> - All styles
                and animations
                <br />
                <code className="text-blue-400">script.js</code> - JavaScript
                functionality
              </p>

              <button
                onClick={handleGenerateFiles}
                className="glow-button px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-white transform transition-all duration-300 hover:from-blue-700 hover:to-teal-700"
              >
                Generate Files
              </button>

              {status.message && (
                <div
                  className={`mt-4 p-4 rounded-lg ${
                    status.type === "success"
                      ? "bg-green-500/20 text-green-300"
                      : status.type === "error"
                      ? "bg-red-500/20 text-red-300"
                      : "bg-blue-500/20 text-blue-300"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </div>

            {files && (
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Your Files:</h2>
                <div className="space-y-4">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700"
                    >
                      <span className="text-gray-300 font-mono">
                        {file.name}
                      </span>
                      <button
                        onClick={() => downloadFile(file.name, file.content)}
                        className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg text-blue-300 transition-colors duration-300"
                      >
                        Download
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-semibold mb-2">
                    How to use these files:
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-300">
                    <li>Download all three files</li>
                    <li>Place them in the same folder on your computer</li>
                    <li>Upload all files to your web hosting service</li>
                    <li>
                      Make sure they maintain the same names and are in the same
                      directory
                    </li>
                  </ol>
                </div>
              </div>
            )}
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

export default MainComponent;