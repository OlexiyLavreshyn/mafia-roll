import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import RolesDisplay from './components/RolesDisplay';

function App() {
  return (
    <div className="App">


    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/RolesDisplay" element={<RolesDisplay />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
