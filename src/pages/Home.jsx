import { BookOpen, Sparkles, Users } from 'lucide-react';

const Home = ({ setActiveTab }) => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Learn Smarter with
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> AI-Powered </span>
            Education
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            EPP EDUTECH provides high-quality learning materials, AI-powered tutoring, and direct access to expert educators. 
            Perfect for high school students who want to excel in their studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveTab('materials')}
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
            >
              <BookOpen className="h-5 w-5" />
              <span>Explore Materials</span>
            </button>
            <button
              onClick={() => setActiveTab('ai-tutor')}
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors flex items-center justify-center space-x-2"
            >
              <Sparkles className="h-5 w-5" />
              <span>Try AI Tutor</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
            <BookOpen className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Materials</h3>
          <p className="text-gray-600">
            Access high-quality learning materials designed specifically for high school students, 
            covering all major subjects with clear explanations and examples.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Learning</h3>
          <p className="text-gray-600">
            Get personalized help from our AI tutor that explains concepts in simple terms, 
            provides step-by-step solutions, and adapts to your learning pace.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <Users className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Educators</h3>
          <p className="text-gray-600">
            Connect directly with experienced teachers and educators for personalized guidance, 
            clarification, and support whenever you need it.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">10K+</div>
            <div className="text-indigo-100">Students Learning</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-indigo-100">Learning Materials</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-indigo-100">Expert Educators</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-indigo-100">Support Available</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
