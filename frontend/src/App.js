import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl">Lizzy AI Contract Q&A</h1>
      </header>
      <main className="p-4">
        <ContractQAComponent />
      </main>
    </div>
  );
}

export default App;
