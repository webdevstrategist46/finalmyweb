async function handler() {
  try {
    // Create the three main files
    const files = [];

    // 1. Generate style.css with all styles
    const css = `
/* Base styles */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom animations and styles */
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
  0% { transform: rotate(45deg) translateY(0); }
  100% { transform: rotate(45deg) translateY(-50px); }
}

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

.slide-in-bottom {
  animation: slideInBottom 0.8s ease-out forwards;
}

.fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
  opacity: 0;
  animation-delay: 0.3s;
}

@keyframes slideInBottom {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes fadeInUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
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

.glow-button:hover::after { opacity: 1; }
.glow-button:hover { box-shadow: 0 0 30px rgba(139, 92, 246, 0.5); }

/* Page specific styles */
.min-h-screen { min-height: 100vh; }
.bg-gradient-to-b { background: linear-gradient(to bottom, #0A0A0A, #1A1A1A); }
.text-white { color: white; }

/* Navigation styles */
.nav-link {
  color: #fff;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #60A5FA;
}

/* Form styles */
.form-input {
  width: 100%;
  padding: 0.5rem 1rem;
  background: rgba(31, 41, 55, 0.5);
  border: 1px solid rgba(75, 85, 99, 0.5);
  border-radius: 0.5rem;
  color: white;
}

.form-input:focus {
  outline: none;
  border-color: #60A5FA;
}`;

    // 2. Generate script.js with all JavaScript
    const js = `
// Navigation handling
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      window.location.href = href;
    });
  });
}

// Form handling
function initForms() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        
        if (!response.ok) throw new Error('Form submission failed');
        
        // Clear form
        form.reset();
        alert('Form submitted successfully!');
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to submit form. Please try again.');
      }
    });
  });
}

// Animation handling
function initAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-bottom');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });

  animatedElements.forEach(el => observer.observe(el));
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initForms();
  initAnimations();
});`;

    // 3. Generate index.html with the main structure
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WriteWeb Media</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
</head>
<body class="bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] text-white">
    <!-- Background Grid -->
    <div class="fixed inset-0">
        <div class="code-grid"></div>
    </div>

    <!-- Navigation -->
    <nav class="relative z-10 bg-gray-900/50 backdrop-blur-sm">
        <div class="max-w-7xl mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
                <a href="/" class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-500">
                    WriteWeb Media
                </a>
                <div class="flex space-x-6">
                    <a href="/" class="nav-link">Home</a>
                    <a href="/about" class="nav-link">About</a>
                    <a href="/services" class="nav-link">Services</a>
                    <a href="/portfolio" class="nav-link">Portfolio</a>
                    <a href="/contact" class="nav-link">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="relative z-10">
        <div class="max-w-7xl mx-auto px-4 py-16">
            <!-- Hero Section -->
            <div class="text-center mb-16">
                <h1 class="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500 mb-8 slide-in-bottom">
                    Welcome to WriteWeb Media
                </h1>
                <p class="text-xl text-gray-300 fade-in-up">
                    Creating stunning web experiences that captivate and convert
                </p>
            </div>

            <!-- Features Section -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up">
                <div class="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-800">
                    <h3 class="text-2xl font-semibold mb-4">Modern Design</h3>
                    <p class="text-gray-300">Clean, responsive layouts that look great on any device</p>
                </div>
                <div class="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-800">
                    <h3 class="text-2xl font-semibold mb-4">Performance</h3>
                    <p class="text-gray-300">Lightning-fast loading times and smooth animations</p>
                </div>
                <div class="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-800">
                    <h3 class="text-2xl font-semibold mb-4">SEO Ready</h3>
                    <p class="text-gray-300">Built with best practices for search engine visibility</p>
                </div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="relative z-10 bg-gray-900/50 backdrop-blur-sm mt-16">
        <div class="max-w-7xl mx-auto px-4 py-8">
            <div class="text-center text-gray-400">
                <p>&copy; 2025 WriteWeb Media. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>`;

    // Add all files to the response
    files.push(
      { name: "index.html", content: html },
      { name: "style.css", content: css },
      { name: "script.js", content: js }
    );

    return {
      files,
      message: "Static files generated successfully",
    };
  } catch (error) {
    console.error("Error generating static files:", error);
    throw new Error("Failed to generate static files");
  }
}