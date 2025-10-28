import { useState } from 'react';
import { Code2, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Visual Designer Portfolio',
    category: 'Portfolio',
    image: '/screenshots/output.png',
    description: 'Modern dark-themed portfolio website with striking red accents',
  },
  {
    id: 2,
    title: 'Creative Agency',
    category: 'Agency',
    image: '/screenshots/output_1.png',
    description: 'Minimalist black and white creative agency landing page',
  },
  {
    id: 3,
    title: 'SaaS Platform',
    category: 'Business',
    image: '/screenshots/output_2.png',
    description: 'Tech SaaS platform with isometric illustrations',
  },
  {
    id: 4,
    title: 'Business Solutions',
    category: 'Business',
    image: '/screenshots/output_3.png',
    description: 'Corporate business website with professional design',
  },
  {
    id: 5,
    title: 'Web Hosting',
    category: 'Business',
    image: '/screenshots/output_4.png',
    description: 'Cloud hosting service with modern illustration style',
  },
  {
    id: 6,
    title: 'DAO Platform',
    category: 'Tech',
    image: '/screenshots/output_5.png',
    description: 'Futuristic blockchain DAO with gradient city backdrop',
  },
  {
    id: 7,
    title: 'E-commerce Plant Store',
    category: 'E-commerce',
    image: '/screenshots/output_6.png',
    description: 'Clean e-commerce design for plant shop',
  },
  {
    id: 8,
    title: 'Law Firm',
    category: 'Professional',
    image: '/screenshots/output_7.png',
    description: 'Professional legal services website with dark theme',
  },
  {
    id: 9,
    title: 'Restaurant',
    category: 'Food',
    image: '/screenshots/output_8.png',
    description: 'Restaurant website with bold yellow typography',
  },
  {
    id: 10,
    title: 'Fashion Trends',
    category: 'Fashion',
    image: '/screenshots/output_9.png',
    description: 'Modern fashion website with geometric layouts',
  },
  {
    id: 11,
    title: 'Crypto Exchange',
    category: 'Tech',
    image: '/screenshots/output_10.png',
    description: 'Cryptocurrency trading platform interface',
  },
  {
    id: 12,
    title: 'Tech Startup',
    category: 'Tech',
    image: '/screenshots/output_11.png',
    description: 'Modern tech startup landing page',
  },
  {
    id: 13,
    title: 'Digital Agency',
    category: 'Agency',
    image: '/screenshots/output_12.png',
    description: 'Digital marketing agency website',
  },
  {
    id: 14,
    title: 'Healthcare Platform',
    category: 'Healthcare',
    image: '/screenshots/output_13.png',
    description: 'Healthcare services website design',
  },
  {
    id: 15,
    title: 'Education Platform',
    category: 'Education',
    image: '/screenshots/output_14.png',
    description: 'Online learning platform interface',
  },
];

const categories = ['All', 'Portfolio', 'Agency', 'Business', 'Tech', 'E-commerce', 'Professional', 'Food', 'Fashion', 'Healthcare', 'Education'];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-32">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-blue-500/20 p-4 rounded-2xl backdrop-blur-sm border border-blue-400/30">
              <Code2 className="w-12 h-12 text-blue-400" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
            UI Design Portfolio
          </h1>

          <p className="text-xl sm:text-2xl text-center text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            A collection of 15 stunning HTML & CSS user interface projects showcasing modern web design principles
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn Profile
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="mailto:contact@example.com"
              className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 border border-slate-600 backdrop-blur-sm"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
          </div>
        </div>
      </header>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 hover:scale-105 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="text-center mt-6">
          <p className="text-slate-600 text-lg">
            Showing <span className="font-bold text-blue-600">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative aspect-video overflow-hidden bg-slate-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4">
                    <button className="w-full flex items-center justify-center gap-2 bg-white text-slate-900 px-4 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300">
                      <ExternalLink className="w-5 h-5" />
                      View Project
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-sm font-bold text-slate-400">
                    #{project.id.toString().padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500/20 p-3 rounded-xl backdrop-blur-sm border border-blue-400/30">
                <Code2 className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold">UI Portfolio</h3>
            </div>

            <p className="text-slate-400 text-center max-w-2xl">
              Passionate about creating beautiful, functional, and user-friendly web interfaces.
              These projects demonstrate proficiency in HTML, CSS, and modern web design principles.
            </p>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <div className="border-t border-slate-800 pt-6 mt-6 w-full text-center">
              <p className="text-slate-500 text-sm">
                &copy; 2025 All Projects. Built with React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
