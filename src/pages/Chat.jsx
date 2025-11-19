import { educators } from '../data/educators';
import EducatorCard from '../components/EducatorCard';

const Chat = () => {
  const handleStartChat = (educator) => {
    // In a real app, this would start a chat with the selected educator
    console.log(`Starting chat with ${educator.name}`);
  };

  return (
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
          <EducatorCard 
            key={index} 
            educator={educator} 
            onStartChat={() => handleStartChat(educator)} 
          />
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
              <h4 className="font-semibold text-gray-900">Get Help Anytime</h4>
              <p className="text-gray-600">Our educators are available to help you understand difficult concepts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
