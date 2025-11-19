import { useState } from 'react';
import { subjects } from '../data/subjects';
import SubjectCard from '../components/SubjectCard';

const Materials = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleStartLearning = (subject) => {
    setSelectedSubject(subject);
    // In a real app, you would navigate to the subject's learning page
    console.log(`Starting to learn ${subject.name}`);
  };

  return (
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
          <SubjectCard 
            key={index} 
            subject={subject} 
            onStartLearning={() => handleStartLearning(subject)} 
          />
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
  );
};

export default Materials;
