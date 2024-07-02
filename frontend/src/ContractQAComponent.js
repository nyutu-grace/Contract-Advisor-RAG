import React, { useState } from 'react';
import FileUpload from './FileUpload';

const ContractQAComponent = () => {
  const [document, setDocument] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [highlightedText, setHighlightedText] = useState('');

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Placeholder for API call to get the answer and highlighted text
    // Replace with actual API call logic
    setAnswer('This is a placeholder answer. Replace with API call response.');
    setHighlightedText('This is a highlighted text from the document.');
  };

  const handleFileUpload = (fileContent) => {
    setDocument(fileContent);
  };

  return (
    <div className="container mx-auto p-4">
      <FileUpload onFileUpload={handleFileUpload} />
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
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h2 className="text-xl font-semibold mb-2">Answer</h2>
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
      {highlightedText && (
        <div className="bg-yellow-100 shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Highlighted Text in Document</h2>
          <p className="text-gray-700">{highlightedText}</p>
        </div>
      )}
    </div>
  );
};

export default ContractQAComponent;

