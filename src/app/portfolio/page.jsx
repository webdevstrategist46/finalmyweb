"use client";
import React from "react";

function MainComponent() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState("all");

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const portfolioItems = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack React-based e-commerce platform with real-time inventory, secure payments, and admin dashboard.",
      category: "Web Development",
      image: "🛍️",
    },
    {
      title: "SaaS Dashboard",
      description:
        "Modern web application dashboard with real-time analytics, user management, and responsive design.",
      category: "Web Development",
      image: "📊",
    },
    {
      title: "Real Estate Platform",
      description:
        "Custom property listing platform with advanced search, virtual tours, and agent portals.",
      category: "Web Development",
      image: "🏠",
    },
    {
      title: "Educational LMS",
      description:
        "Learning management system with video integration, progress tracking, and interactive assessments.",
      category: "Web Development",
      image: "📚",
    },
    {
      title: "Tech Blog Platform",
      description:
        "Dynamic blog platform with markdown support and SEO optimization.",
      category: "Web Development",
      image: "📝",
    },
    {
      title: "Social Media Campaign",
      description:
        "Strategic social media content that boosted engagement metrics.",
      category: "Social Media",
      image: "📱",
    },
  ];

  const categories = [
    "all",
    ...new Set(portfolioItems.map((item) => item.category)),
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] text-white overflow-hidden ${
        isLoaded ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000`}
    >
      {/* Animated Background */}
      <div className="fixed inset-0">
        <div className="gradient-sphere" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500 mb-12 text-center glitch-text">
          Our Work
        </h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105
                ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-teal-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems
            .filter(
              (item) =>
                activeCategory === "all" || item.category === activeCategory
            )
            .map((item, index) => (
              <div
                key={index}
                className="portfolio-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:transform hover:scale-105 transition-all duration-500 group">
                  <div className="absolute -top-4 -right-4 w-12 h-12 flex items-center justify-center text-2xl bg-gradient-to-br from-blue-500 to-teal-500 rounded-full shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                    {item.image}
                  </div>
                  <span className="inline-block px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-400 mb-4">
                    {item.category}
                  </span>
                  <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                  <p className="text-gray-300">{item.description}</p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
                </div>
              </div>
            ))}
        </div>

        <div className="mt-16 text-center slide-up">
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:shadow-glow transition-all duration-500">
            <h2 className="text-3xl font-bold mb-6">
              Ready to start your project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create something amazing together
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-glow"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .gradient-sphere {
          position: absolute;
          width: 100vw;
          height: 100vh;
          background: radial-gradient(circle at center, 
            rgba(96, 165, 250, 0.1) 0%,
            rgba(45, 212, 191, 0.1) 25%,
            transparent 50%);
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .glitch-text {
          position: relative;
          animation: glitch 5s infinite;
        }

        @keyframes glitch {
          0% {
            text-shadow: none;
          }
          20% {
            text-shadow: 0 0 10px rgba(96, 165, 250, 0.8),
                        -2px 0 #60A5FA,
                        2px 0 #2DD4BF;
          }
          21% {
            text-shadow: none;
          }
          100% {
            text-shadow: none;
          }
        }

        .portfolio-card {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .slide-up {
          opacity: 0;
          animation: slideUp 0.8s ease-out forwards;
          animation-delay: 0.5s;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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