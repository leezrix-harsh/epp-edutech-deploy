import { CheckCircle, Play } from 'lucide-react';

const SubjectCard = ({ subject, onStartLearning }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
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
      <button 
        onClick={onStartLearning}
        className="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
      >
        <Play className="h-4 w-4" />
        <span>Start Learning</span>
      </button>
    </div>
  );
};

export default SubjectCard;
