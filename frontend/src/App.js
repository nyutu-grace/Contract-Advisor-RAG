import React from 'react';
import NavBar from './NavBar';
import ContractQAComponent from './ContractQAComponent';

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
      <NavBar />
      <main className="p-6">
        <ContractQAComponent />
      </main>
    </div>
  );
}

export default App;
