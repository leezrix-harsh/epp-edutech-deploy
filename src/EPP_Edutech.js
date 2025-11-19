import React, { useState, useEffect } from 'react';
import { Brain, MessageCircle, Users, BookOpen, Sparkles, ChevronRight, Star, Play, CheckCircle, User, Send, Menu, X } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hai! Saya siap membantu kamu memahami materi pelajaran. Mau mulai dari mana?", sender: 'ai' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: 'user'
      };
      setMessages([...messages, newMessage]);
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          text: "I understand you're asking about " + inputMessage + ". Let me explain that concept in a simple way...",
          sender: 'ai'
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
      
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
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                EPP EDUTECH
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['home', 'materials', 'ai-tutor', 'chat', 'about'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`capitalize font-medium transition-colors ${
                    activeTab === tab
                      ? 'text-indigo-600 border-b-2 border-indigo-600'
                      : 'text-gray-600 hover:text-indigo-600'
                  }`}
                >
                  {tab.replace('-', ' ')}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {['home', 'materials', 'ai-tutor', 'chat', 'about'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 capitalize font-medium transition-colors ${
                    activeTab === tab
                      ? 'text-indigo-600'
                      : 'text-gray-600 hover:text-indigo-600'
                  }`}
                >
                  {tab.replace('-', ' ')}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'home' && (
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
        )}

        {activeTab === 'materials' && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Learning Materials</h2>
              <p className="text-xl text-gray-600">
                Comprehensive study materials designed for high school students
              </p>
            </div>

            {/* Subject Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map((subject, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${subject.color} rounded-full flex items-center justify-center text-white text-xl mr-4`}>
                      {subject.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{subject.name}</h3>
                  </div>
                  <div className="space-y-2">
                    {subject.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                    <Play className="h-4 w-4" />
                    <span>Start Learning</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Featured Resources */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Learning Resources</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-xl p-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Interactive Quizzes</h4>
                  <p className="text-gray-600 mb-4">Test your knowledge with interactive quizzes that adapt to your learning level.</p>
                  <button className="text-indigo-600 font-semibold hover:underline">Start Quiz →</button>
                </div>
                <div className="border border-gray-200 rounded-xl p-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Video Explanations</h4>
                  <p className="text-gray-600 mb-4">Watch step-by-step video explanations for complex concepts.</p>
                  <button className="text-indigo-600 font-semibold hover:underline">Watch Now →</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ai-tutor' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Tutor</h2>
              <p className="text-xl text-gray-600">
                Get personalized help and explanations from our AI tutor
              </p>
            </div>

            {/* AI Features */}
            <div className="grid md:grid-cols-2 gap-8">
              {aiFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* AI Chat Interface */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4">
                <h3 className="text-white font-bold flex items-center">
                  <Sparkles className="h-5 w-5 mr-2" />
                  AI Tutor Chat
                </h3>
              </div>
              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about your studies..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    onClick={sendMessage}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition-colors flex items-center"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'chat' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Chat with Educators</h2>
              <p className="text-xl text-gray-600">
                Get personalized help from expert educators
              </p>
            </div>

            {/* Educators List */}
            <div className="grid md:grid-cols-2 gap-6">
              {educators.map((educator, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{educator.avatar}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{educator.name}</h3>
                      <p className="text-gray-600">{educator.subject}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium">{educator.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">{educator.students} students</span>
                  </div>
                  <button className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2">
                    <MessageCircle className="h-4 w-4" />
                    <span>Start Chat</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Chat Interface Preview */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How It Works</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Select an Educator</h4>
                    <p className="text-gray-600">Choose from our expert teachers based on subject and availability</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Start Your Session</h4>
                    <p className="text-gray-600">Begin a live chat session to discuss your questions and concerns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Get Personalized Help</h4>
                    <p className="text-gray-600">Receive detailed explanations and guidance tailored to your needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">About EPP EDUTECH</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're dedicated to providing high school students with the best learning experience through 
                innovative technology and expert guidance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-4">
                  At EPP EDUTECH, we believe every student deserves access to high-quality education. 
                  We combine cutting-edge AI technology with expert human educators to create a learning 
                  environment that's both effective and engaging.
                </p>
                <p className="text-gray-600">
                  Our platform is specifically designed for high school students, taking into account 
                  their unique learning needs and challenges. We focus on making complex concepts 
                  simple and accessible, while providing the support students need to succeed.
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8">
                <img
                  src="https://placehold.co/400x300/4F46E5/FFFFFF?text=Students+Learning"
                  alt="Students learning"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose EPP EDUTECH?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">AI-Powered Learning</h4>
                  <p className="text-gray-600">Personalized learning experiences powered by advanced AI technology</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Expert Educators</h4>
                  <p className="text-gray-600">Connect with experienced teachers who are passionate about education</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Interactive Content</h4>
                  <p className="text-gray-600">Engaging materials designed to make learning fun and effective</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6 text-indigo-400" />
                <h3 className="text-xl font-bold">EPP EDUTECH</h3>
              </div>
              <p className="text-gray-400">
                Empowering students with AI-powered education and expert guidance.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setActiveTab('home')} className="hover:text-white">Home</button></li>
                <li><button onClick={() => setActiveTab('materials')} className="hover:text-white">Materials</button></li>
                <li><button onClick={() => setActiveTab('ai-tutor')} className="hover:text-white">AI Tutor</button></li>
                <li><button onClick={() => setActiveTab('chat')} className="hover:text-white">Chat</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Subjects</h4>
              <ul className="space-y-2 text-gray-400">
                {subjects.slice(0, 4).map((subject) => (
                  <li key={subject.name}>{subject.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EPP EDUTECH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
