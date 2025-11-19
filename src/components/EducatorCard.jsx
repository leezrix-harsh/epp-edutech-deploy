import { Star, MessageCircle } from 'lucide-react';

const EducatorCard = ({ educator, onStartChat }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
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
      <button 
        onClick={onStartChat}
        className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
      >
        <MessageCircle className="h-4 w-4" />
        <span>Start Chat</span>
      </button>
    </div>
  );
};

export default EducatorCard;
