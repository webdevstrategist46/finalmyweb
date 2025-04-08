"use client";
import React from "react";

function MainComponent() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] overflow-hidden ${
        isLoaded ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000`}
    >
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute w-[150%] h-[150%] -top-1/4 -left-1/4">
          {[...Array.from({ length: 75 })].map((_, i) => (
            <div
              key={i}
              className="shooting-star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="fixed inset-0">
        {[...Array.from({ length: 5 })].map((_, i) => (
          <div
            key={i}
            className="floating-orb"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              background: `radial-gradient(circle at 30% 30%, 
                rgba(${Math.random() * 100 + 155}, ${
                Math.random() * 100 + 155
              }, 255, 0.15), 
                transparent)`,
            }}
          />
        ))}
      </div>

      <nav className="relative z-50 px-6 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a
            href="/"
            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500 hover:from-blue-500 hover:to-teal-600 transition-all duration-300 flex items-center gap-2 transform slide-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-4xl animate-float">✍️</span> WriteWeb Media
          </a>
          <div className="hidden md:flex space-x-8">
            {[
              { name: "Services", path: "/services", delay: 0.3 },
              { name: "Portfolio", path: "/portfolio", delay: 0.4 },
              { name: "About", path: "/about", delay: 0.5 },
              { name: "Contact", path: "/contact", delay: 0.6 },
            ].map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="nav-link text-gray-300 hover:text-white relative text-lg font-medium transition-colors duration-300 slide-fade-in"
                style={{ animationDelay: `${item.delay}s` }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative z-40 px-4 pt-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
              <span
                className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-500 to-emerald-500 animate-gradient relative slide-fade-in-up"
                style={{ animationDelay: "0.7s" }}
              >
                Crafting Digital Stories
              </span>
              <span
                className="block text-white mt-4 relative slide-fade-in-up"
                style={{ animationDelay: "0.8s" }}
              >
                That Leave a Mark
                <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
              </span>
            </h1>
          </div>

          <p
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed slide-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            Transform your digital presence with our expert content creation and
            web development services
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a
              href="/start-project"
              className="glow-button px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-white transform transition-all duration-300 hover:from-blue-700 hover:to-teal-700 slide-fade-in-up"
              style={{ animationDelay: "1s" }}
            >
              Start Your Story
            </a>
            <a
              href="/portfolio"
              className="relative px-8 py-4 text-lg font-semibold rounded-full border-2 border-blue-500/30 text-white hover:border-blue-500 transform transition-all duration-300 group slide-fade-in-up"
              style={{ animationDelay: "1.1s" }}
            >
              View Our Work
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-teal-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-32 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {[
              {
                title: "Content Creation",
                icon: "✍️",
                desc: "Engaging content that tells your story",
                gradient: "from-blue-600/20 to-blue-400/20",
                delay: 1.2,
              },
              {
                title: "Web Development",
                icon: "💻",
                desc: "Beautiful, responsive websites that convert",
                gradient: "from-teal-600/20 to-teal-400/20",
                delay: 1.3,
              },
              {
                title: "Digital Strategy",
                icon: "🎯",
                desc: "Data-driven approaches for growth",
                gradient: "from-emerald-600/20 to-emerald-400/20",
                delay: 1.4,
              },
            ].map((card) => (
              <div
                key={card.title}
                className="slide-fade-in-up"
                style={{ animationDelay: `${card.delay}s` }}
              >
                <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 transform hover:scale-[1.02] transition-all duration-500 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${card.gradient}`}
                  />
                  <div className="relative z-10">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-400">{card.desc}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <style jsx global>{`
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

        .shooting-star::before {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100px;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0.5), transparent);
        }

        @keyframes floatAnimation {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, -15px) rotate(5deg); }
          50% { transform: translate(0, -25px) rotate(0deg); }
          75% { transform: translate(-10px, -15px) rotate(-5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        .floating-orb {
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          filter: blur(20px);
          animation: floatAnimation 15s ease-in-out infinite;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s linear infinite;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(to right, #8B5CF6, #EC4899);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        @keyframes slideFadeIn {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideFadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .slide-fade-in {
          opacity: 0;
          animation: slideFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .slide-fade-in-up {
          opacity: 0;
          animation: slideFadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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