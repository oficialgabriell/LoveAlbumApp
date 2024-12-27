import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import FormPage from './components/FormPage/FormPage';
import ResultPage from './components/ResultPage/ResultPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;