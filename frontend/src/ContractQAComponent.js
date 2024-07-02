import React, { useState } from 'react';

const ContractQAComponent = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Placeholder for API call to get the answer
    // Replace with actual API call logic
    setAnswer('This is a placeholder answer. Replace with API call response.');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contract Q&A</h1>
      <form onSubmit={handleFormSubmit} className="mb-4">
        <label htmlFor="question" className="block text-lg font-medium text-gray-700 mb-2">
          Ask a question about the contract:
        </label>
        <input
          type="text"
          id="question"
          value={question}
          onChange={handleQuestionChange}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md mb-4"
          placeholder="Enter your question here"
        />
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
      {answer && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Answer</h2>
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default ContractQAComponent;
