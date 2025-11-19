import { useState } from 'react';
import { BookOpen, Sparkles, Users, MessageCircle, Clock, Award, Brain, Star, Play, CheckCircle, User, Send, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');

  const subjects = [
    { name: 'Mathematics', icon: '🔢', color: 'bg-blue-500', topics: ['Algebra', 'Geometry', 'Calculus', 'Statistics'] },
    { name: 'Physics', icon: '⚛️', color: 'bg-purple-500', topics: ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Waves'] },
    { name: 'Chemistry', icon: '🧪', color: 'bg-green-500', topics: ['Atomic Structure', 'Chemical Bonds', 'Reactions', 'Organic'] },
    { name: 'Biology', icon: '🧬', color: 'bg-emerald-500', topics: ['Cell Biology', 'Genetics', 'Evolution', 'Ecology'] },
    { name: 'English', icon: '📝', color: 'bg-orange-500', topics: ['Grammar', 'Literature', 'Writing', 'Speaking'] },
    { name: 'Indonesian', icon: '🇮🇩', color: 'bg-red-500', topics: ['Grammar', 'Literature', 'Writing', 'Speaking'] }
  ];

  const aiFeatures = [
    { title: 'Step-by-step Explanations', description: 'Break down complex problems into simple, easy-to-understand steps' },
    { title: 'Practice Problems', description: 'Get personalized practice questions based on your learning level' },
    { title: 'Visual Learning', description: 'Interactive diagrams and visual aids to help you understand concepts' },
    { title: 'Instant Feedback', description: 'Get immediate feedback on your answers and explanations for mistakes' }
  ];

  const educators = [
    { name: 'Ms. Sarah Johnson', subject: 'Mathematics', rating: 4.9, students: 1200, avatar: '👩‍🏫' },
    { name: 'Mr. David Chen', subject: 'Physics', rating: 4.8, students: 950, avatar: '👨‍🏫' },
    { name: 'Dr. Emily Rodriguez', subject: 'Chemistry', rating: 4.9, students: 1100, avatar: '👩‍🔬' },
    { name: 'Mr. James Wilson', subject: 'Biology', rating: 4.7, students: 850, avatar: '👨‍🔬' }
  ];

  const sendMessage = () => {
    if (inputMessage.trim()) {
      // Message handling logic will be added here
      setInputMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="text-center py-16">
        <div className="max-w-4xl mx-auto px-4">
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
            <Link 
              href="/Materials"
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
            >
              <BookOpen className="h-5 w-5" />
              <span>Explore Materials</span>
            </Link>
            <Link
              href="/AITutor"
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors flex items-center justify-center space-x-2"
            >
              <Sparkles className="h-5 w-5" />
              <span>Try AI Tutor</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white max-w-7xl mx-4 sm:mx-6 lg:mx-auto my-12">
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

      {/* Subjects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Explore Our Subjects
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Comprehensive learning materials for all major subjects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <div className={`${subject.color} p-6 text-white`}>
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{subject.icon}</span>
                    <h3 className="text-xl font-bold">{subject.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {subject.topics.map((topic, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors">
                    Explore {subject.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              AI-Powered Learning Experience
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Smart features to enhance your learning journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              {aiFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600">
                      <Sparkles className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                  <Play className="h-16 w-16 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">See it in action</h3>
              <p className="text-gray-600 mb-6">
                Watch how our AI tutor can help you understand complex concepts with ease.
              </p>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-20 lg:px-8">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to start learning?</span>
              <span className="block text-indigo-100">Join EPP EDUTECH today.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-100">
              Sign up now and get access to all our premium features for free. No credit card required.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 lg:mt-0 lg:flex-shrink-0">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-indigo-600 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"
            >
              Get started for free
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-xl text-white hover:bg-white/10 md:py-4 md:text-lg md:px-10"
            >
              Watch demo
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">About</a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">Blog</a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">Careers</a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">Contact</a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">Terms & Privacy</a>
            </div>
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} EPP EDUTECH. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}