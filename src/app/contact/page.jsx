"use client";
import React from "react";

function MainComponent() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = `Contact Form Submission from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:webdevstrategist46@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] text-white overflow-hidden ${
        isLoaded ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000`}
    >
      {/* Animated Background */}
      <div className="fixed inset-0">
        <div className="circles-animation">
          {[...Array.from({ length: 10 })].map((_, i) => (
            <div
              key={i}
              className="circle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500 mb-12 text-center reveal-text">
          Let's Work Together
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="slide-in-left">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:shadow-glow transition-all duration-500">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-group">
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none transform transition-transform duration-300 hover:scale-102"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none transform transition-transform duration-300 hover:scale-102"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none h-32 transform transition-transform duration-300 hover:scale-102"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 text-white transform hover:scale-105 transition-all duration-300 pulse-button"
                >
                  Send Message
                </button>

                {status && (
                  <p className="text-center text-green-500 mt-4 fade-in">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>

          <div className="space-y-8 slide-in-right">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:shadow-glow transition-all duration-500">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  <span className="block font-medium">Email:</span>
                  webdevstrategist46@gmail.com
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="social-link">
                    Instagram
                  </a>
                  <a href="#" className="social-link">
                    LinkedIn
                  </a>
                  <a href="#" className="social-link">
                    Twitter
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:shadow-glow transition-all duration-500">
              <h2 className="text-2xl font-bold mb-4">FAQ</h2>
              <div className="space-y-4">
                <div className="faq-item">
                  <h3 className="font-medium mb-2">
                    What services do you provide?
                  </h3>
                  <p className="text-gray-300">
                    We offer web development, blog writing, content writing, and
                    social media post writing.
                  </p>
                </div>
                <div className="faq-item">
                  <h3 className="font-medium mb-2">
                    Do you work with small businesses?
                  </h3>
                  <p className="text-gray-300">
                    Yes! We support businesses of all sizes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .circle {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(96, 165, 250, 0.1);
          animation: ripple 10s infinite;
        }

        @keyframes ripple {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.3;
          }
          100% {
            transform: scale(0.8);
            opacity: 0;
          }
        }

        .reveal-text {
          animation: revealText 1s ease-out forwards;
          opacity: 0;
        }

        @keyframes revealText {
          0% {
            clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
            opacity: 0;
          }
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            opacity: 1;
          }
        }

        .slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }

        .slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
          opacity: 0;
          animation-delay: 0.2s;
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

        .social-link {
          color: #60A5FA;
          position: relative;
          transition: all 0.3s ease;
        }

        .social-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background: linear-gradient(to right, #60A5FA, #2DD4BF);
          transition: width 0.3s ease;
        }

        .social-link:hover::after {
          width: 100%;
        }

        .faq-item {
          transform: translateY(20px);
          opacity: 0;
          animation: fadeInUp 0.5s ease-out forwards;
        }

        .faq-item:nth-child(2) {
          animation-delay: 0.2s;
        }

        @keyframes fadeInUp {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .pulse-button {
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

        .hover-shadow-glow:hover {
          box-shadow: 0 0 30px rgba(96, 165, 250, 0.2);
        }

        .fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default MainComponent;