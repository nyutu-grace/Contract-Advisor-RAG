import React, { useState } from 'react';

const FileUpload = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onFileUpload(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-lg font-medium text-gray-700 mb-2">Upload Contract:</label>
      <div className="flex items-center space-x-2">
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md mb-2 p-2"
        />
        <button
          onClick={handleUpload}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
