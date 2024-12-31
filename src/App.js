import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import RolesDisplay from './components/RolesDisplay';

function App() {
  return (
    <div className="App">


      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/RolesDisplay" element={<RolesDisplay />} />



      </Routes>
  </div>
  );
}

export default App;
