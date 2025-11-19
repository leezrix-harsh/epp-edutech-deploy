import { useState } from 'react';
import { Sparkles, Send } from 'lucide-react';
import { aiFeatures } from '../data/aiFeatures';
import ChatMessage from '../components/ChatMessage';

const AITutor = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hai! Saya siap membantu kamu memahami materi pelajaran. Mau mulai dari mana?", sender: 'ai' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

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
            <ChatMessage key={message.id} message={message} />
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
  );
};

export default AITutor;
