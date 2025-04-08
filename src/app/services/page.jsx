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
      <div className="fixed inset-0">
        <div className="grid-animation" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500 mb-12 text-center scale-in">
          Expert Web Solutions
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="service-card">
            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:transform hover:scale-105 transition-all duration-500">
              <div className="service-icon web">⚡</div>
              <h2 className="text-2xl font-bold mb-4">
                Custom Web Development
              </h2>
              <p className="text-gray-300">
                Transform your vision into reality with our cutting-edge web
                development solutions. We specialize in creating fast,
                responsive, and SEO-optimized websites that drive results.
              </p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>• Modern React Applications</li>
                <li>• E-commerce Solutions</li>
                <li>• Progressive Web Apps</li>
                <li>• Custom Web Platforms</li>
              </ul>
            </div>
          </div>

          <div className="service-card" style={{ animationDelay: "0.2s" }}>
            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:transform hover:scale-105 transition-all duration-500">
              <div className="service-icon design">🎨</div>
              <h2 className="text-2xl font-bold mb-4">Web Design & UI/UX</h2>
              <p className="text-gray-300">
                Stand out with stunning, user-centric web designs that combine
                aesthetics with functionality. We create immersive digital
                experiences that keep users engaged.
              </p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>• Responsive Designs</li>
                <li>• Interactive Interfaces</li>
                <li>• User Experience Optimization</li>
                <li>• Brand-Aligned Web Presence</li>
              </ul>
            </div>
          </div>

          <div className="service-card" style={{ animationDelay: "0.4s" }}>
            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:transform hover:scale-105 transition-all duration-500">
              <div className="service-icon tech">🔧</div>
              <h2 className="text-2xl font-bold mb-4">Technical Solutions</h2>
              <p className="text-gray-300">
                Enhance your web presence with advanced technical solutions. We
                implement robust features that power modern web applications.
              </p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>• API Integration</li>
                <li>• Performance Optimization</li>
                <li>• Security Implementation</li>
                <li>• Cloud Solutions</li>
              </ul>
            </div>
          </div>

          <div className="service-card" style={{ animationDelay: "0.6s" }}>
            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:transform hover:scale-105 transition-all duration-500">
              <div className="service-icon content">📝</div>
              <h2 className="text-2xl font-bold mb-4">Web Content Solutions</h2>
              <p className="text-gray-300">
                Complete your web presence with optimized content integration.
                We ensure your web platform effectively communicates your
                message.
              </p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>• SEO-Optimized Content</li>
                <li>• Content Management Systems</li>
                <li>• Dynamic Content Integration</li>
                <li>• Performance Monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .grid-animation {
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

        .scale-in {
          animation: scaleIn 0.8s ease-out forwards;
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .service-card {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }

        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .service-icon {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #60A5FA, #2DD4BF);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(96, 165, 250, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(96, 165, 250, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(96, 165, 250, 0);
          }
        }
      `}</style>
    </div>
  );
}

export default MainComponent;