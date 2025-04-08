"use client";
import React from "react";

function MainComponent() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] text-white overflow-hidden ${
        isLoaded ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000`}
    >
      {/* Keep existing animated background */}
      <div className="fixed inset-0">
        <div className="absolute w-full h-full">
          {[...Array.from({ length: 20 })].map((_, i) => (
            <div
              key={i}
              className="floating-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500 mb-8 slide-in-bottom">
          Crafting Digital Excellence
        </h1>

        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8 fade-in-up">
            Founded by Sahil Tiwari, we are a specialized web development agency
            focused on creating exceptional digital experiences. Our core
            expertise lies in building modern, scalable, and high-performance
            web applications that drive business growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="slide-in-left">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:shadow-glow transition-all duration-500">
                <h2 className="text-2xl font-bold mb-4">Our Expertise</h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="mr-2">⚡</span>
                    Modern Web Development
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">🔧</span>
                    Full-Stack Solutions
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📱</span>
                    Responsive Design
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">🚀</span>
                    Performance Optimization
                  </li>
                </ul>
              </div>
            </div>

            <div className="slide-in-right">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:shadow-glow transition-all duration-500">
                <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="mr-2">⚛️</span>
                    React & Modern JavaScript
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">🎨</span>
                    Tailwind CSS & Modern UI
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">🔄</span>
                    API Development
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">🛡️</span>
                    Security & Best Practices
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 slide-in-bottom">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:shadow-glow transition-all duration-500">
              <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold mb-2">Strategic Planning</h3>
                  <p className="text-gray-300">
                    Thorough analysis and custom solutions for your web
                    development needs
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💻</div>
                  <h3 className="text-xl font-bold mb-2">Modern Development</h3>
                  <p className="text-gray-300">
                    Using latest technologies and best practices in web
                    development
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold mb-2">Continuous Growth</h3>
                  <p className="text-gray-300">
                    Ongoing support and updates for your web applications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keep existing styles */}
      <style jsx global>{`
        .floating-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle at center, rgba(96, 165, 250, 0.5), transparent);
          border-radius: 50%;
          animation: float 10s infinite ease-in-out;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(20px, -20px) scale(1.5);
            opacity: 0.6;
          }
        }

        .slide-in-bottom {
          animation: slideInBottom 0.8s ease-out forwards;
          opacity: 0;
        }

        .fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
          animation-delay: 0.3s;
        }

        .slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
          animation-delay: 0.4s;
        }

        .slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
          opacity: 0;
          animation-delay: 0.6s;
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

        @keyframes slideInLeft {
          from {
            transform: translateX(-50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .hover-shadow-glow:hover {
          box-shadow: 0 0 30px rgba(96, 165, 250, 0.2);
        }
      `}</style>
    </div>
  );
}

export default MainComponent;