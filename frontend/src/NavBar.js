import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-3xl font-bold">Lizzy AI</a>
        <div className="flex items-center">
          <a href="/" className="text-white mr-6">Home</a>
          <a href="/about" className="text-white">About</a>
        </div>
      </div>
    </nav>
  );
};


export default NavBar;
