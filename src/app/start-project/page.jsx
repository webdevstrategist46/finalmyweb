"use client";
import React from "react";

function MainComponent() {
  const [formData, setFormData] = React.useState({
    serviceType: "",
    budget: "",
    timeline: "",
    projectDetails: "",
    name: "",
    email: "",
  });
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [showPopup, setShowPopup] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/send-project-requirements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.serviceType,
          budget: formData.budget,
          timeline: formData.timeline,
          description: formData.projectDetails,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send requirements");
      }

      setShowPopup(true);
      // Reset form
      setFormData({
        serviceType: "",
        budget: "",
        timeline: "",
        projectDetails: "",
        name: "",
        email: "",
      });
    } catch (err) {
      setError(err.message);
      console.error("Error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] text-white overflow-hidden ${
        isLoaded ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000`}
    >
      <div className="fixed inset-0">
        <div className="particles">
          {[...Array.from({ length: 50 })].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-500 mb-8 text-center animate-title">
          Start Your Premium Project
        </h1>

        <p
          className="text-center text-xl text-blue-200 mb-12 slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          Transform your vision into an extraordinary digital experience
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div
            className="form-group slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:shadow-glow transition-all duration-500">
              <label className="block text-xl font-medium mb-4">
                What type of service do you need?
              </label>
              <select
                value={formData.serviceType}
                onChange={(e) =>
                  setFormData({ ...formData, serviceType: e.target.value })
                }
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-transform hover:scale-[1.02]"
                required
              >
                <option value="">Select a service</option>
                <option value="Custom Web Development">
                  Custom Web Development
                </option>
                <option value="Web Design & UI/UX">Web Design & UI/UX</option>
                <option value="Technical Solutions">Technical Solutions</option>
                <option value="Web Content Solutions">
                  Web Content Solutions
                </option>
              </select>
            </div>
          </div>

          <div
            className="form-group slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:shadow-glow transition-all duration-500">
              <label className="block text-xl font-medium mb-4">
                Investment Range
              </label>
              <select
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-transform hover:scale-[1.02]"
                required
              >
                <option value="">Select investment range</option>
                <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                <option value="$100,000+">$100,000+</option>
              </select>
            </div>
          </div>

          <div
            className="form-group slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:shadow-glow transition-all duration-500">
              <label className="block text-xl font-medium mb-4">
                What's your timeline?
              </label>
              <select
                value={formData.timeline}
                onChange={(e) =>
                  setFormData({ ...formData, timeline: e.target.value })
                }
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-transform hover:scale-[1.02]"
                required
              >
                <option value="">Select timeline</option>
                <option value="Less than 1 month">Less than 1 month</option>
                <option value="1-3 months">1-3 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="6+ months">6+ months</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="form-group slide-up"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:shadow-glow transition-all duration-500">
                <label className="block text-xl font-medium mb-4">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-transform hover:scale-[1.02]"
                  required
                />
              </div>
            </div>

            <div
              className="form-group slide-up"
              style={{ animationDelay: "1s" }}
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:shadow-glow transition-all duration-500">
                <label className="block text-xl font-medium mb-4">
                  Your Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-transform hover:scale-[1.02]"
                  required
                />
              </div>
            </div>
          </div>

          <div
            className="form-group slide-up"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:shadow-glow transition-all duration-500">
              <label className="block text-xl font-medium mb-4">
                Project Details
              </label>
              <textarea
                value={formData.projectDetails}
                onChange={(e) =>
                  setFormData({ ...formData, projectDetails: e.target.value })
                }
                className="w-full h-40 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-transform hover:scale-[1.02]"
                required
              />
            </div>
          </div>

          <div
            className="text-center slide-up"
            style={{ animationDelay: "1.4s" }}
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className="group px-12 py-5 text-xl font-semibold rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-glow relative overflow-hidden disabled:opacity-50"
            >
              <span className="relative z-10">
                {isSubmitting ? "Sending..." : "Begin Your Journey"}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </button>
            {error && <p className="mt-4 text-red-500">{error}</p>}
          </div>
        </form>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setShowPopup(false)}
          ></div>
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-md w-full border border-gray-700 transform scale-up">
            <div className="text-center">
              <div className="mb-4 text-green-400 text-6xl">✓</div>
              <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                Requirements Sent Successfully!
              </h3>
              <p className="text-gray-300 mb-6">
                Thank you for sharing your project details. We'll contact you
                very soon to discuss your requirements.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg text-white hover:from-blue-700 hover:to-teal-700 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .particle {
          position: absolute;
          background: radial-gradient(circle at center, rgba(96, 165, 250, 0.7), transparent);
          border-radius: 50%;
          animation: float 15s infinite ease-in-out;
          filter: blur(1px);
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translate(30px, -30px) scale(1.5) rotate(90deg);
            opacity: 0.6;
          }
          50% {
            transform: translate(0, -50px) scale(2) rotate(180deg);
            opacity: 0.8;
          }
          75% {
            transform: translate(-30px, -30px) scale(1.5) rotate(270deg);
            opacity: 0.6;
          }
        }

        .animate-title {
          animation: glow 3s ease-in-out infinite alternate;
          background-size: 300% 300%;
          animation: glow 3s ease-in-out infinite alternate,
                     gradientMove 8s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes glow {
          from {
            text-shadow: 0 0 20px rgba(96, 165, 250, 0.7),
                         0 0 30px rgba(96, 165, 250, 0.5),
                         0 0 40px rgba(96, 165, 250, 0.3);
          }
          to {
            text-shadow: 0 0 30px rgba(96, 165, 250, 0.8),
                         0 0 40px rgba(96, 165, 250, 0.6),
                         0 0 50px rgba(96, 165, 250, 0.4);
          }
        }

        .slide-up {
          opacity: 0;
          animation: slideUp 1s ease-out forwards;
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

        .hover-shadow-glow:hover {
          box-shadow: 0 0 40px rgba(96, 165, 250, 0.3);
        }

        .form-group:hover .hover-shadow-glow {
          box-shadow: 0 0 40px rgba(96, 165, 250, 0.2);
        }

        .scale-up {
          animation: scaleUp 0.3s ease-out forwards;
        }

        @keyframes scaleUp {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default MainComponent;